// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable security/detect-object-injection */
/**
 * This should only be used when testing, say, inside of a GitHub Action.
 * Never use this in production!!!
 */
export class PlainTextAuthenticator {
    #alternativeAuthenticator;
    #users;
    /**
     * @param config - Configuration for the PlainTextAuthenticator
     * @param config.users - User name/password combinations
     * @param config.alternativeAuthenticator - An optional Authenticator to use when the user name is not found in the configuration.
     */
    constructor(config) {
        this.#users = config.users;
        this.#alternativeAuthenticator = config.alternativeAuthenticator;
    }
    async authenticate(userName, password) {
        if (Object.hasOwn(this.#users, userName)) {
            return this.#users[userName] === password;
        }
        else if (this.#alternativeAuthenticator !== undefined) {
            return await this.#alternativeAuthenticator.authenticate(userName, password);
        }
        return false;
    }
}
