const request = require("supertest");
const {app} = require("../index.js")

describe("Test backend server functionality.", () => {
    test("Should retrieve all users.", async () =>{
        const response = await request(app).get("/users");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data[0]).toHaveProperty("id");
    })
})