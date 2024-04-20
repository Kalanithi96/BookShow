import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import mongoose from "mongoose";
import User from "./../src/auth/providers/mongo/models/user";
import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./../src/db/mongo/mongodb";
import {AuthService} from "./../src/auth/authService";
import {MongoAuthProvider} from "./../src/auth/providers/mongo/MongoAuthProvider";

describe('Auth Service with Mongo Auth Provier Tests', () => {
  beforeAll(async () => {
    await connectDb('test')
	await User.deleteMany({});
  })

  afterAll(async () => {
	await mongoose.connection.close();
  });

  test('should connect database succesfully', async () => {
    const db = mongoose.connection
    expect(db.readyState).toBe(1)
  })

  const authService = new AuthService(new MongoAuthProvider());

  test('should not login for a non-existent user', async () => {
	  const res = await authService.login("001","100");
	  expect(res.statusCode).toBe(401);
  });

  test('should register a new user with unique userId', async () => {
	  const res = await authService.register("001","100");
	  expect(res.statusCode).toBe(201);
  });

  test('should not register a new user with duplicate userId', async () => {
	  const res = await authService.register("001","100");
	  expect(res.statusCode).toBe(400);
  });

  test('should login user when userId and password match', async () => {
	  const res = await authService.login("001","100");
	  expect(res.statusCode).toBe(200);
  });

  test('should not login when userId and password do not match', async () => {
	  const res = await authService.login("001","101");
	  expect(res.statusCode).toBe(401);
  });

});
