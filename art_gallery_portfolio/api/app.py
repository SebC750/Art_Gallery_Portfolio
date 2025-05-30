from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from db import DatabaseConnection
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.secret_key = os.getenv("SECRET_KEY")
crypt = Bcrypt(app)

database = DatabaseConnection()
config = {
    "origins": "http://localhost:5173"
}

CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the gallery server.", "status": 200})


@app.route("/login", methods=["POST"])
def login():

    try:
        connection = database.get_connection()
        data = request.get_json()
        username = data["username"]
        password = data["password"]
        password_hash = crypt.generate_password_hash(password).decode("utf-8")
        user = connection.execute(
            "SELECT * FROM Users WHERE username = ?;", (username,)
        ).fetchone()

        is_password_valid = crypt.check_password_hash(password_hash, user[2])
        if not is_password_valid or not user:
            return jsonify({"message": "Invalid password. Try again."}, {"status": 401})

        session["user_id"] = user[0]
        session["username"] = user[1]

        return jsonify({"message": "Successfully logged in.", "status": 200})
    except Exception as e:
        return jsonify({'message': f'Internal server error. Error message: {e}', "status": 500})

@app.route("/sign_up", methods=["POST"])
def sign_up():
    
    try:
        connection = database.get_connection()
        data = request.get_data()
        new_username = data['username']
        new_password = data['password']
        password_hash = crypt.generate_password_hash(
            new_password).decode("utf-8")
        connection.execute("INSERT INTO Users(username, password_hash, role) VALUES(?,?,?)",
                           (new_username, password_hash, "Visitor",))
        return jsonify({"message": "Successfully registered.", "status": 200})
    except Exception as e:
        return jsonify({'message': f'Internal server error. Error message: {e}', "status": 500})


@app.route("/logout", methods=["POST"])
def logout():
    try:
        session.pop("user_id", None)
        return jsonify({'message': "Successfully logged out.", "status": 200})
    except Exception as e:
        return jsonify({'message': f'Internal server error. Error message: {e}', "status": 500})


if __name__ == "__main__":
    app.run(port=8000, debug=True)
