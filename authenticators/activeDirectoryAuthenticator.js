import ActiveDirectoryAuthenticate from '@cityssm/activedirectory-authenticate';
export class ActiveDirectoryAuthenticator {
    #activeDirectoryAuthenticator;
    constructor(config) {
        const ldapClientOptions = {};
        const activeDirectoryAuthenticateOptions = {
            baseDN: config.baseDN,
            bindUserDN: config.bindUserDN,
            bindUserPassword: config.bindUserPassword,
            cacheUserBindDNs: config.cacheUserBindDNs ?? true
        };
        for (const key in config) {
            if (!(key in activeDirectoryAuthenticateOptions)) {
                ldapClientOptions[key] = config[key];
            }
        }
        this.#activeDirectoryAuthenticator = new ActiveDirectoryAuthenticate(ldapClientOptions, activeDirectoryAuthenticateOptions);
    }
    async authenticate(userName, password) {
        const result = await this.#activeDirectoryAuthenticator.authenticate(userName, password);
        return result.success;
    }
}
