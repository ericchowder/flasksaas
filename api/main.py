# requests module to make requests to other servers
from requests
# request object from flask module for receiving requests from client
from flask import request
from flask import Flask

UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY="secret_key"

# __name__ is the name of the flask module being ran
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    requests.get(url=UNSPLASH_URL, headers=headers)
    # Flask converts dictionary to json when returned
    return {"word": word}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)