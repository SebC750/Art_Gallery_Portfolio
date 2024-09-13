import pymongo
import flask_cors
from flask_cors import CORS
from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

#This is the backend file where all the routes handling CRUD api calls for creating, retrieving, updating and deleting artworks.

load_dotenv()

app = Flask(__name__)

CORS(app)

host = os.getenv('DB_HOST')
dbname = os.getenv('DB_NAME')
port = os.getenv('DB_PORT')

#I created a class for the database so that we can create a single instance of a database that can connect when a query is received and disconnect after resolving the query.
#I am also going to need to be able to bring over my database class and the methods into the routes.py that I will create later so making the connection into a class means I can modularize my code by importing it.
class Database():
    def __init__(self):
        self.host = host
        self.port = int(port)
        self.name = dbname
        self.db = None
        self.client = None
        #For the connect method, I have it create a new mongoclient instance and then sets the database we are trying to access within the mongodb connection as the value for db in the database.
    def connect(self):
        try: 
           if not self.client:
             self.client = MongoClient(self.host, self.port)
             self.db = self.client[self.name]
           return self.db
        except Exception as e:
            return jsonify({"Message": "Could not connect to the database.", "Error" : str(e)}), 500
    #Disconnects when the query is executed.
    def disconnect(self):
        if self.client:
            try:
              self.client.close()
              self.client = None
              self.db = None
            except:
                return jsonify({"Message" : "Database refuses to disconnect. "}), 500
    
#Get the connection and the specific database that stores all the data.
database = Database()

def preprocess_objectids(doc):
    #This function helps to convert objectids into a jsonifiable format by iterating through each document and casting the id type to string.
    #Its not typical for me to convert ids to str values but as long as I don't need to do mathematical operations on them.
    for i in doc:
        i['_id'] = str(i['_id'])
    return doc

#Just have these test routes here but all routes will be in a separate py file in the future.
@app.route('/')
def welcome_msg():
     #Welcome message for a warming greeting. :)
     return jsonify({"message": "Hello world! Welcome to the art gallery api.",})

@app.route('/get_all_artworks', methods=['GET'])
def get_all_art():
     try:
        db = database.connect()
        #Send a query to retrieve all the artwork documents from the artworks collection in the mongodb database. 
        query = db['Artworks'].find({})
        #Store all the artworks in a list to be jsonified and returned back to the client.
        all_artworks = [art for art in query]
        
        if not all_artworks:
            return jsonify({'Message' : 'Could not retrieve all the artworks'}), 404
        #Otherwise, convert all object_ids to string for jsonifying.
        all_artworks_result = preprocess_objectids(all_artworks)
        #Return the results.
        return jsonify({"All artworks" : all_artworks_result}), 200
     except Exception as e:
       
        return jsonify({'Message' : 'Could not execute database query', 'error' : str(e)}), 500
     finally:
         database.disconnect()

if __name__ in "__main__":
   
   app.run(debug=True)


