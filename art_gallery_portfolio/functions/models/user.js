const connection = require("../config/db");
const { hashPassword, comparePassword } = require("../utilities/hashing");
const db = connection.getDB();
const checkIfUserExists = require("../utilities/checkIfExists")
const generateJWTToken = require("../utilities/jwt")
class UserRepository {
    static instance = null;
    constructor() {
        if (!UserRepository.instance) {
            this.collection = "users";
            UserRepository.instance = this;
        }
        return UserRepository.instance;
    }
    async getAllUsers() {
        const response = await db.collection(this.collection).get();
        const userData = response.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return userData;
    }
    async getUserById(userId) {
        if (!userId) {
            throw new Error("Invalid userId: userId cannot be empty or undefined.");
        }

        const response = await db.collection(this.collection).doc(userId).get();

        if (!response.exists) {
            return { message: "User not found.", status: 404 };
        }

        return { id: response.id, ...response.data() };
    }
    async login(username, password, res) {
        if (!username || !password) {
            return res.status(400).json({ message: "Missing username or password" });
        }
        const response = await db.collection(this.collection)
            .where("username", "==", username)
            .get();
    
        if (response.empty) {
            return res.status(404).json({ message: "Could not find user credentials." });
        }
    
        const userDoc = response.docs[0];
        const userData = userDoc.data();
        
        const isPasswordValid = await comparePassword(password, userData.password);
    
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password." });
        }
    
        const userToken = await generateJWTToken(username);
    
        if (!userToken) {
            return res.status(500).json({ message: "Failed to generate token." });
        }
    
        res.cookie("jwt", userToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 60 * 60 * 1000
        });
        return res.json({ message: "Successful login.", token: userToken, status: 200 });
    }
    
    async register(username, password) {
        const hashedPassword = await hashPassword(password)
        const doesUserExist = await checkIfUserExists(username);
        if (doesUserExist) {
            return { message: "Username already taken", status: 403 };
        }
        const newDoc = {
            username: username,
            password: hashedPassword
        }
        const response = await db.collection(this.collection).add(newDoc)
        if (!response.id) {
            return { message: "Could not register account.", status: 400 };
        }
        return { message: "Account successfully created", status: 200 };
    }
    
    async deleteUser(userId) {
        const response = await db.collection(this.collection).doc(userId).delete();
        if (!response) {
            return;
        }
        return response;
    }
}

const userRepository = new UserRepository();

module.exports = userRepository