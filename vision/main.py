import base64
import requests
import os
from dotenv import load_dotenv

load_dotenv()


def encode_image(image_path):
    with open(os.path.join(os.path.dirname(__file__), image_path), "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


# Path to your image
image_path = "webcam.jpg"

# Getting the base64 string
base64_image = encode_image(image_path)

print(base64_image)

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.environ.get('OPENAI_API_KEY')}",
}

payload = {
    "model": "gpt-4-vision-preview",
    "messages": [
        {
            "role": "user",
            "content": [
                {"type": "text", "text": 'What is the most exact product in this picture and the brand? Answer in the format { "product": "product", "brand": "brand"}. Example: {"product" : "green nike dunk sb low", "brand":"nike"}. Include as much details as you can about the product to narrow it down. Include the brand name in the product as well'}, 
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
                },
            ],
        }
    ],
    "max_tokens": 300,
}

response = requests.post(
    "https://api.openai.com/v1/chat/completions", headers=headers, json=payload
)
response = response.json()
print(response)
# content = response["choices"][0]["text"]
# print(content)

