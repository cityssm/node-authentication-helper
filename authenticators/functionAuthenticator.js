export class FunctionAuthenticator {
    #authenticateFunction;
    constructor(config) {
        this.#authenticateFunction = config.authenticateFunction;
    }
    async authenticate(userName, password) {
        return await this.#authenticateFunction(userName, password);
    }
}
