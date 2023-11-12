import requests
from dotenv import load_dotenv
import os

# load environment variables
load_dotenv()

def perform_search(query, num_results='9'):
    # Replace 'SERP_API_KEY' with your actual environment variable for the SERP API key
    api_key = os.getenv('SERP_API_KEY')

    search_results = []

    try:
        # Replace the URL and parameters with the ones provided by the SERP API documentation
        response = requests.get(
            'https://serpapi.com/search',
            params={
                'api_key': api_key,
                'engine': 'google_shopping', 
                'q': query,
                'google_domain': 'google.com', 
                'gl': 'us', 
                'hl': 'en', 
                'num': num_results,
            }
        )
        response.raise_for_status()
        results = response.json().get('shopping_results', []) 

        for result in results:
            search_results.append({
                'title': result.get('title'), # The field may vary depending on the SERP API's response
                'imgUrl': result.get('thumbnail'), # The field may vary depending on the SERP API's response
            })
        print(search_results)
        
    except requests.exceptions.RequestException as e:
        print(e)
        # Handle the exception or return an error message

    return search_results
