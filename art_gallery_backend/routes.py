import backend
from backend import Database
import pymongo
import flask_cors
from flask_cors import CORS
from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

database = Database()

#This is the backend file where all the routes handling CRUD api calls for creating, retrieving, updating and deleting artworks.
app = Flask(__name__)

CORS(app)
#API routes
def preprocess_objectids(doc):
    #This function helps to convert objectids into a jsonifiable format by iterating through each document and casting the id type to string.
    #Its not typical for me to convert ids to str values but as long as I don't need to do mathematical operations on them.
    for i in doc:
        i['_id'] = str(i['_id'])
    return doc

@app.route('/')
def welcome_msg():
     
     return jsonify({"message": "Hello world! Welcome to the art gallery api.",})

@app.route('/get_all_artworks', methods=['GET'])
def get_all_art():
     try:
        db = database.connect()
        #Get all the artworks in the database. 
        query = db['gallery'].find({})
        #Store all the artworks in a list to be jsonified and returned back to the client. 
        all_artworks = [art for art in query]
        
        if not all_artworks:
            return jsonify({'Message' : 'Could not retrieve all the artworks'}), 404
        
        all_artworks_result = preprocess_objectids(all_artworks)
        
        return jsonify({"All artworks" : all_artworks_result}), 200
     except Exception as e:
       
        return jsonify({'Message' : 'Could not execute database query', 'error' : str(e)}), 500
     finally:
         database.disconnect()

@app.route('/get_artwork/:<id>', methods=['GET'])
def get_artwork():
    print("Get artwork")
    
@app.route('/update_artwork/:<id>')
def update_artwork():
    print("Update artwork")

@app.route('/delete_artwork/:<id>')
def delete_artwork():
    print("Remove artwork")
    
@app.route('/add_artwork')    
def add_artwork():
    print("Add artwork")


if __name__ in "__main__":
   
   app.run(debug=True)