process.env.ENV = "e2e-test";
import {app, server} from "./../src/index"
import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import request from "supertest"
import User from "./../src/auth/providers/mongo/models/user";
import mongoose from "mongoose";

describe('Test /api/v1/auth endpoints', () => {

  beforeAll(async () => {
	await User.deleteMany({})
  })

  afterAll(async () => {
	await User.deleteMany({})
	await mongoose.connection.close()
	server.close();
  })

  test('should not login non-existent user', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({userId:"100",password:"001"});
    expect(response.statusCode).toBe(401);
  });

  test('should register a new user with unique userId', async () => {
    const response = await request(app).post('/api/v1/auth/register').send({userId:"100",password:"001"});
    expect(response.statusCode).toBe(201);
  });

  test('should not register a new user with duplicate userId', async () => {
    const response = await request(app).post('/api/v1/auth/register').send({userId:"100",password:"001"});
    expect(response.statusCode).toBe(400);
  });

  test('should not login a user when userId and password do mot match', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({userId:"100",password:"002"});
    expect(response.statusCode).toBe(401);
  });

  test('should login a user when userId and password match', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({userId:"100",password:"001"});
    expect(response.statusCode).toBe(200);
  });
});
