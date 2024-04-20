import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./../src/db/mongo/mongodb";

describe('Connect with DB', () => {
  beforeAll(async () => {
    await connectDb('test')
  })

  afterAll(async () => {
	await mongoose.connection.close();
  });

  test('should connect database succesfully', async () => {
    const db = mongoose.connection
    expect(db.readyState).toBe(1)
  })
});
