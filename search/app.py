from flask import Flask, request, jsonify
from views.search import perform_search

app = Flask(__name__)

@app.route('/search')
def search():
    search_query = request.args.get('query')
    search_results = perform_search(search_query)

    print(search_results)
    # Return the search results as JSON
    return jsonify(search_results)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
