class Auth {
    constructor() {
        this.authenticated = false;
        this.username = 'admin';
        this.password = '1234';
        this.token = null;
    }

    login(username, password, cb) {
        if (username === this.username && password === this.password) {
            this.authenticated = true;
            cb();
        }

        return this.authenticated;
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
