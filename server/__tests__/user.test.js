import supertest from "supertest";
import app from "../index.js";

const userInput = {
   email: `test${Math.random().toString(16).slice(2)}@example.com`,
   password: "Password123@",
};

describe("POST /signup", () => {
   // user registration

   describe("user registration", () => {
      describe("given the email and password are valid", () => {
         it("should return the status code 200", async () => {

            const { status } = await supertest(app)
               .post("/api/v1/signup")
               .send(userInput);

            expect(status).toBe(201);
         });
      });

   });

});

describe("POST /signin", () => {
   // user login

   describe("user login", () => {
      describe("given the email and password are valid", () => {
         it("should return the status code 200", async () => {

            const { status } = await supertest(app)
               .post("/api/v1/signin")
               .send(userInput);

            expect(status).toBe(200);
         });
      });

   });

});