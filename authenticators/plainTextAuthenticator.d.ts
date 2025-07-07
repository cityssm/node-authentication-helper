import type { BaseAuthenticator } from './_baseAuthenticator.js';
export type PlainTextAuthenticatorConfiguration = Record<string, string>;
/**
 * This should only be used when testing, say, inside of a GitHub Action.
 * Never use this in production!!!
 */
export declare class PlainTextAuthenticator implements BaseAuthenticator {
    #private;
    /**
     * @param config - User name/password combinations
     * @param alternativeAuthenticator - An optional Authenticator to use when the user name is not found in the configuration.
     */
    constructor(config: PlainTextAuthenticatorConfiguration, alternativeAuthenticator?: BaseAuthenticator);
    authenticate(userName: string, password: string): Promise<boolean>;
}
