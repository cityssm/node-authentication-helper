import { AdWebAuthConnector } from '@cityssm/ad-web-auth-connector';
export class ADWebAuthAuthenticator {
    #adWebAuth;
    constructor(config) {
        this.#adWebAuth = new AdWebAuthConnector(config);
    }
    async authenticate(userName, password) {
        return await this.#adWebAuth.authenticate(userName, password);
    }
}
