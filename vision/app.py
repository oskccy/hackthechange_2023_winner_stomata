from flask import Flask, request, jsonify
from analyze import analyze_image

app = Flask(__name__)


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    image = data["image"]
    return analyze_image(image)


@app.errorhandler(Exception)
def handle_exception(error):
    # Handle all unhandled exceptions
    response = {"error": repr(error)}
    # Optionally, you can include more detailed error information
    # For example, the type of exception or a custom error message
    response["details"] = str(error)
    # Set an appropriate status code based on the type of exception
    status_code = 500 if not hasattr(error, "code") else error.code
    return jsonify(response), status_code


if __name__ == "__main__":
    app.run(debug=True, port=5000)
