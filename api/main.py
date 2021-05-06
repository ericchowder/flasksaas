import os
# requests module to make requests to other servers
import requests
# request object from flask module for receiving requests from client
from flask import request
from flask import Flask
# Allow use of .env.local file
from dotenv import load_dotenv

# Load .env.local file and specify relative path
load_dotenv(dotenv_path=="./.env.local")

# Gets UNSPLASH_KEY from .env.local, second arg is backup
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
UNSPLASH_URL="https://api.unsplash.com/photos/random"

# __name__ is the name of the flask module being ran
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

# Example Route for hitting Unsplash API
@app.route("/new-image")
def new_image():
    # Store query into var "word"
    word = request.args.get("query")
    # Set headers that will be used for request
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    # Set params that will be used for request
    params = {
        "query": word
    }
    # Request command used to hit Unsplash API
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    # Convert to JSON
    data = response.json()
    # Flask converts dictionary to json when returned
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)