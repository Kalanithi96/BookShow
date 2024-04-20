export interface AuthProvider {
	login(userId: String, password: String) : void
	register(userId: String, password: String) : void
}

export class AuthService {
	provider : AuthProvider

	constructor(provider : AuthProvider) {
		this.provider = provider;
	}

	login(userId : String, password : String) : void {
		this.provider.login(userId, password)
	}

	register(userId : String, password : String) : void {
		this.provider.register(userId, password)
	}

}

