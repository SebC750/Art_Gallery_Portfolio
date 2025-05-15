const { initializeApp, cert} = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require("../firebaseService.json")

const FIREBASE_CONNECTION_CONFIG = {
    credentials: cert(serviceAccount),
}

class DBConnection{
    static instance = null;
    constructor(){
        if(!DBConnection.instance){
            try{
                initializeApp({
                    credential: FIREBASE_CONNECTION_CONFIG.credentials
                });
                this.connection = getFirestore();
                DBConnection.instance = this;
            }catch(e){
                 throw e;
            }
            
        }        
        return DBConnection.instance
    }   
    getDB(){
        return this.connection;
    }
}

module.exports = new DBConnection();