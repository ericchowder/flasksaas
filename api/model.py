from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
# Allow use of .env.local file
from dotenv import load_dotenv
# Extensions
from api.database import db
#from api.main import app

# Load .env.local file and specify relative path
load_dotenv(dotenv_path="./.env.local") 

# Init blueprint
models = Blueprint('models', __name__)

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

@models.route('/user', methods=['GET'])
def get_users():
    return 'users route here!'