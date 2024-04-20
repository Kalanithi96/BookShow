import user from "./models/user"
import {AuthProvider} from "./../../authService"

export class MongoAuthProvider implements AuthProvider {

	login(userId : String, password : String) : void {
		console.log("Logging in", userId, password)
	}

	register(userId : String, password : String) : void {
		console.log("Registering", userId, password)
	}

}
