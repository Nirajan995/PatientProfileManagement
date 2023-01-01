import request from 'supertest';
import app from "../index.js";

describe("GET /api/v1/patient", () => {
   beforeAll(async () => {
      // set up the todo
      await request(app).post("/api/v1/login").send(newTodo);
   })
   afterAll(async () => {
      await request(app).delete(`/todo/${newTodo.id}`)
   })
   it("should return all patient", async () => {
      const res = await request(app).get("/api/v1/patient");
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
   });
});