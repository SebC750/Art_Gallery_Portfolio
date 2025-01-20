require("dotenv").config()

export const FIREBASE_CONNECTION_CONFIG = {
    name:  process.env.FIREBASE_DB_HOST,
    username: process.env.FIREBASE_DB_USERNAME,
    password: process.env.FIREBASE_DB_PASSWORD
}

class DBConnection{
    DBConnection(name, username, password){
        this.name = name;
        this.username = username;
        this.password = password;
    }
    async executeQuery(statement, parameters){
        
    }
    async closeConnection(){

    }
}

export const connection = new DBConnection(
    FIREBASE_CONNECTION_CONFIG.name,
    FIREBASE_CONNECTION_CONFIG.username,
    FIREBASE_CONNECTION_CONFIG.password,
)