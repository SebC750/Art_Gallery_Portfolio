import pymongo
import flask_cors
from flask_cors import CORS
from flask import Flask, jsonify
import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

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
    




