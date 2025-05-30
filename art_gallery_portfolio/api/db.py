import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

config = {
    "host" : os.getenv("DB_HOST"),
    "database" : os.getenv("DB_DATABASE"),
    "port" : os.getenv("DB_PORT"),
    "username" : os.getenv("DB_USERNAME"),
    "password" : os.getenv("DB_PASSWORD")
}

class DatabaseConnection:
    def __init__(self):
        self.connection = mysql.connector.connect(
            host=config["host"],
            port=int(config["port"]),
            database=config["database"],
            username=config["username"],
            password=config["password"]
        )
    def get_connection(self):
        return self.connection.cursor()