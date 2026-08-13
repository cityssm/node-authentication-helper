import { AdWebAuthConnector } from '@cityssm/ad-web-auth-connector';
export class ADWebAuthAuthenticator {
    #adWebAuth;
    constructor(config) {
        this.#adWebAuth = new AdWebAuthConnector(config);
    }
    async authenticate(username, password) {
        return await this.#adWebAuth.authenticate(username, password);
    }
}
