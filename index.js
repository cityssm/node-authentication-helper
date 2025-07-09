import { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
import { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
import { FunctionAuthenticator } from './authenticators/functionAuthenticator.js';
import { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
const Authenticators = {
    activeDirectory: ActiveDirectoryAuthenticator,
    adWebAuth: ADWebAuthAuthenticator,
    function: FunctionAuthenticator,
    plainText: PlainTextAuthenticator
};
/**
 * Factory function to create an authenticator based on the specified type.
 * @param authenticatorType - The authenticator to create ('activeDirectory' | 'adWebAuth' | 'function | 'plainText')
 * @param authenticatorConfig - The configuration for the authenticator
 * @returns An Authenticator instance based on the specified type
 * @throws Error if the authenticator type is unknown
 */
export function getAuthenticatorByType(authenticatorType, authenticatorConfig) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const Authenticator = Authenticators[authenticatorType];
    if (Authenticator === undefined) {
        throw new Error(`Unknown authenticator type: ${authenticatorType}`);
    }
    return new Authenticator(authenticatorConfig);
}
export { BaseAuthenticator } from './authenticators/_baseAuthenticator.js';
export { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
export { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
export { FunctionAuthenticator } from './authenticators/functionAuthenticator.js';
export { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
