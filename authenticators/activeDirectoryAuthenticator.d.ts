import type { BaseAuthenticator } from './_baseAuthenticator.js';
export interface ActiveDirectoryAuthenticatorConfiguration {
    url: string;
    baseDN: string;
    bindUserDN: string;
    bindUserPassword: string;
}
export declare class ActiveDirectoryAuthenticator implements BaseAuthenticator {
    #private;
    constructor(config: ActiveDirectoryAuthenticatorConfiguration);
    authenticate(userName: string, password: string): Promise<boolean>;
}
