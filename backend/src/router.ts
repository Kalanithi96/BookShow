import express from "express";

const router = express.Router();

router.post('/auth/login',(req,res) => { 
	res.send("Log In")
}).post('/auth/register',(req,res) => {	
	res.send("Register")
})

export default router;
