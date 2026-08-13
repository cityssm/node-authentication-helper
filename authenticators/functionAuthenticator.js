export class FunctionAuthenticator {
    #authenticateFunction;
    constructor(config) {
        this.#authenticateFunction = config.authenticate;
    }
    async authenticate(username, password) {
        return await this.#authenticateFunction(username, password);
    }
}
