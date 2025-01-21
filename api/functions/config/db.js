const { initializeApp, cert} = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require("../services/firebaseService.json")
require("dotenv").config()

const FIREBASE_CONNECTION_CONFIG = {
    credentials: cert(serviceAccount),
}

let instance = null;

class DBConnection{
    constructor(){
        if(!instance){
            try{
                initializeApp({
                    credential: FIREBASE_CONNECTION_CONFIG.credentials
                });
                this.connection = getFirestore();
                instance = this;
            }catch(e){
                 throw e;
            }
            
        }        
        return instance
    }   
    getDB(){
        return this.connection;
    }
}

module.exports = new DBConnection();