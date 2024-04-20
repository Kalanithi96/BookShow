import User from "./models/user";
import bcrypt from "bcryptjs";
import {AuthProvider, AuthResponse} from "./../../authService"

export class MongoAuthProvider implements AuthProvider {

	async login(userId : string, password : string) : Promise<AuthResponse> {
	    
		try {

			const user = await User.findOne({ userId });

			if (!user){
				return {
					statusCode : 401,
					message: "User not found",
				};
			}

			if (typeof(user.password) === 'string'){
			
				const isCorrect = await bcrypt.compare(password, user.password);

				if (isCorrect) {
					return {
						statusCode: 200,
						message: "User found and Password matches",
					};
				} else {
					return {
						statusCode: 401,
						message: "User found and Password did not match",
					};
				}

			} else {
				return {
					statusCode: 401,
					message: "User found and Password did not match",
				};
			}
		
		} catch (e) {
			console.log(e);
			return {
				statusCode: 400,
				message: "Failed to login",
			};
		}

	}

	async register(userId : string, password : string) : Promise<AuthResponse> {
	
		const hash = await bcrypt.hash(password, 12);

		try {
			const New = await User.create({ userId: userId, password: hash });
			return {
				statusCode: 201,
				message: "User Created: " + userId
			};
		} catch (e) {
			console.log(e);
			return {
				statusCode: 400,
				message: "Error occurred"
			}
		}

	}
}
