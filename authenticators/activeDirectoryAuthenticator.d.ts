import { type ActiveDirectoryAuthenticateConfig, type LdapClientOptions } from '@cityssm/activedirectory-authenticate';
import type { BaseAuthenticator } from './_baseAuthenticator.js';
export type ActiveDirectoryAuthenticatorConfiguration = ActiveDirectoryAuthenticateConfig & LdapClientOptions;
export declare class ActiveDirectoryAuthenticator implements BaseAuthenticator {
    #private;
    constructor(config: ActiveDirectoryAuthenticatorConfiguration);
    authenticate(userName: string, password: string): Promise<boolean>;
}
