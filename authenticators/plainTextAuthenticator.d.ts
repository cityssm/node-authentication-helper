import type { BaseAuthenticator } from './_baseAuthenticator.js';
export interface PlainTextAuthenticatorConfiguration {
    alternativeAuthenticator?: BaseAuthenticator;
    users: Record<string, string>;
}
/**
 * This should only be used when testing, say, inside of a GitHub Action.
 * Never use this in production!!!
 */
export declare class PlainTextAuthenticator implements BaseAuthenticator {
    #private;
    /**
     * @param config - Configuration for the PlainTextAuthenticator
     * @param config.users - User name/password combinations
     * @param config.alternativeAuthenticator - An optional Authenticator to use when the user name is not found in the configuration.
     */
    constructor(config: PlainTextAuthenticatorConfiguration);
    authenticate(userName: string, password: string): Promise<boolean>;
}
