import base64
import requests
import os
from dotenv import load_dotenv
import json
from operator import itemgetter
from pprint import pprint

load_dotenv()


def encode_image(image_path):
    with open(os.path.join(os.path.dirname(__file__), image_path), "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


def complete(prompt, image):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.environ.get('OPENAI_API_KEY')}",
    }

    payload = {
        "model": "gpt-4-vision-preview",
        "temperature": 0,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt,
                    },
                ],
            }
        ],
        "max_tokens": 1000,
    }
    if not image is None:
        payload["messages"][0]["content"].append(
            {
                "type": "image_url",
                "image_url": {
                    "url": image,
                    "detail": "high",
                },
            },
        )

    response = requests.post(
        "https://api.openai.com/v1/chat/completions", headers=headers, json=payload
    )
    response = response.json()
    try:
        content = response["choices"][0]["message"]["content"]
        pprint(content)
        content = json.loads(content)
    except Exception as e:
        print(response)
        raise e

    return content


def analyze_image(image):
    response = complete(
        """What is the most exact product in this picture and the brand? Answer in the format:
        { "product": "product", "brand": "brand"}.
        Example: {"product" : "green nike dunk sb low", "brand":"nike"}.
        Include as much specific details as you can about the product to narrow it down. 
        Include all details in the product.
        Include the brand name in the product field""",
        image,
    )

    print(response)
    return response


def evaluate_product(text, image):
    prompt = f"What are three sustainability concerns with the product {text}?" + "\nBack each concern up with three points of evidence. You can include positive and negative points, do your best to make it honest and relative to other products. Include a score 1-10 for each category. Please answer in the following format:" +"""\n
    {
        "concerns": [
            {
                "name": "concern 1"
                "points": [
                    "point 1",
                    "point 2",
                    "point 3"
                ],
                "overall_score": 5
            }
        ]
    }""" +"\nMake sure that you output only valid json in the format above"
    print(prompt)

    return complete(prompt, image)


if __name__ == "__main__":
    product, brand = itemgetter("product", "brand")(analyze_image(
        """https://cdn.vox-cdn.com/thumbor/0lfmVr4Yh5soRLgSKj6Q5GgMf-s=/0x643:5449x5755/1400x933/filters:focal(1929x1351:2803x2225):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71024746/Lawrence_Gatorade.0.jpeg""")
    )
    print(product, brand)

    pprint(evaluate_product(product, None))

