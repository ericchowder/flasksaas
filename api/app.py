from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# Allow use of .env.local file
from dotenv import load_dotenv
import os

# Load .env.local file and specify relative path
load_dotenv(dotenv_path="./.env.local") 

app = Flask(__name__)

app.config["SECRET_KEY"] = "mysecretkey"
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("SQLITE_URI", "")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
db.create_all()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(50))
    complete = db.Column(db.Boolean)
    user_id = db.Column(db.Integer)

if __name__ == "__main__":
    app.run(debug=True)