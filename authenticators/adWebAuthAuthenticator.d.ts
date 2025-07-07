import { type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration } from '@cityssm/ad-web-auth-connector';
import type { BaseAuthenticator } from './_baseAuthenticator.js';
export declare class ADWebAuthAuthenticator implements BaseAuthenticator {
    #private;
    constructor(config: ADWebAuthAuthenticatorConfiguration);
    authenticate(userName: string, password: string): Promise<boolean>;
}
export { type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration } from '@cityssm/ad-web-auth-connector';
