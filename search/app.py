from flask import Flask, request, jsonify
from views.search import perform_search
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/search', methods=['POST'])
@cross_origin(supports_credentials=True)
def search():
    data = request.get_json()  # Get data from POST body
    search_query = data['query']  # Access the 'query' key
    search_results = perform_search(search_query)
    
    return jsonify(search_results)

@app.route('/search_alternatives', methods=['POST'])
@cross_origin(supports_credentials=True)
def search_alternatives():
    data = request.get_json()
    search_query = data['query'] + ' alternatives'
    search_results = perform_search(search_query)
    
    return jsonify(search_results)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
