import requests

def perform_search(query):
    api_key = 'AIzaSyDtnuUNrqxcCqnx75v8kgTw6-jimucRkPw'
    cse_id = '86cc21440c2fa4564'

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
