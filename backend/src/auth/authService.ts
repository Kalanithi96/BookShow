interface user {}

interface AuthProvider {}

class AuthService {
	provider : AuthProvider

	constructor(provider : AuthProvider) {
    this.provider = provider;
  }
}
