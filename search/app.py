from flask import Flask, request, jsonify
from views.search import perform_search
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/search')
@cross_origin(supports_credentials=True)
def search():
    search_query = request.args.get('query')
    search_results = perform_search(search_query)

    print(search_results)
    # Return the search results as JSON
    return jsonify(search_results)

if __name__ == '__main__':
    app.run(debug=True)
