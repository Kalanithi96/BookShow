import express from "express";
import {AuthService} from "./auth/authService"
import {MongoAuthProvider} from "./auth/providers/mongo/MongoAuthProvider"

const authService = new AuthService(new MongoAuthProvider())

const router = express.Router();

router.post('/auth/login',(req,res) => { 
	authService.login("name","pw");
	res.send("Log In");
}).post('/auth/register',(req,res) => {
	authService.register("Name","PW");
	res.send("Register");
})

export default router;
