export type AuthResponse = {
	statusCode : number,
	message: string
}

export interface AuthProvider {
	login(userId: string, password: string) : Promise<AuthResponse>
	register(userId: string, password: string) : Promise<AuthResponse>
}

export class AuthService {
	provider : AuthProvider

	constructor(provider : AuthProvider) {
		this.provider = provider;
	}

	login(userId : string, password : string) : Promise<AuthResponse> {
		return this.provider.login(userId, password)
	}

	register(userId : string, password : string) : Promise<AuthResponse> {
		return this.provider.register(userId, password)
	}

}

