import request from "supertest";
import app from "./../index";

describe("Auth Controller", () => {
  test("Login with valid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "user", password: "password" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  test("Login with invalid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "invalid_user", password: "invalid_password" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });
});
