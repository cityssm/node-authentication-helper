import ActiveDirectoryAuthenticate from '@cityssm/activedirectory-authenticate';
export class ActiveDirectoryAuthenticator {
    #activeDirectoryAuthenticator;
    constructor(config) {
        this.#activeDirectoryAuthenticator = new ActiveDirectoryAuthenticate({
            url: config.url
        }, {
            baseDN: config.baseDN,
            bindUserDN: config.bindUserDN,
            bindUserPassword: config.bindUserPassword,
            cacheUserBindDNs: config.cacheUserBindDNs ?? false
        });
    }
    async authenticate(userName, password) {
        const result = await this.#activeDirectoryAuthenticator.authenticate(userName, password);
        return result.success;
    }
}
