import ActiveDirectory from 'activedirectory2';
export class ActiveDirectoryAuthenticator {
    #activeDirectory;
    constructor(config) {
        this.#activeDirectory = new ActiveDirectory(config);
    }
    async authenticate(userName, password) {
        if (userName === '' || password === '') {
            return false;
        }
        // eslint-disable-next-line promise/avoid-new
        return await new Promise((resolve) => {
            try {
                this.#activeDirectory.authenticate(userName, password, (error, auth) => {
                    if ((error ?? '') !== '') {
                        resolve(false);
                    }
                    resolve((auth ?? false));
                });
            }
            catch {
                resolve(false);
            }
        });
    }
}
