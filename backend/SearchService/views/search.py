import requests
from dotenv import load_dotenv
import os

# load environment variables
load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
GOOGLE_CSE_ID = os.getenv('GOOGLE_CSE_ID')

def perform_search(query):
    api_key = GOOGLE_API_KEY
    cse_id = GOOGLE_CSE_ID

    search_results = []

    try:
        response = requests.get(
            'https://www.googleapis.com/customsearch/v1',
            params={
                'key': api_key,
                'cx': cse_id,
                'q': query,
            }
        )
        response.raise_for_status()
        results = response.json().get('items', [])

        for result in results:
            search_results.append({
                'title': result['title'],
            })
        print(search_results)
        
    except requests.exceptions.RequestException as e:
        print(e)
        # Handle the exception or return an error message

    return search_results
