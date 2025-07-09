// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
import { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
import { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
import { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
/**
 * Factory function to create an authenticator based on the specified type.
 * @param authenticatorType - The authenticator to create ('activeDirectory' | 'adWebAuth' | 'plainText')
 * @param authenticatorConfig - The configuration for the authenticator
 * @returns A BaseAuthenticator instance based on the specified type
 * @throws Error if the authenticator type is unknown
 */
export function getAuthenticatorByType(authenticatorType, authenticatorConfig) {
    switch (authenticatorType) {
        case 'activeDirectory': {
            return new ActiveDirectoryAuthenticator(authenticatorConfig);
        }
        case 'adWebAuth': {
            return new ADWebAuthAuthenticator(authenticatorConfig);
        }
        case 'plainText': {
            return new PlainTextAuthenticator(authenticatorConfig);
        }
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        default: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            throw new Error(`Unknown authenticator type: ${authenticatorType}`);
        }
    }
}
export { BaseAuthenticator } from './authenticators/_baseAuthenticator.js';
export { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
export { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
export { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
