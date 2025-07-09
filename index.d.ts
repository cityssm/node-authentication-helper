import { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
import { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
import { FunctionAuthenticator } from './authenticators/functionAuthenticator.js';
import { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
declare const Authenticators: {
    readonly activeDirectory: typeof ActiveDirectoryAuthenticator;
    readonly adWebAuth: typeof ADWebAuthAuthenticator;
    readonly function: typeof FunctionAuthenticator;
    readonly plainText: typeof PlainTextAuthenticator;
};
export type AuthenticatorType = keyof typeof Authenticators;
/**
 * Factory function to create an authenticator based on the specified type.
 * @param authenticatorType - The authenticator to create ('activeDirectory' | 'adWebAuth' | 'function | 'plainText')
 * @param authenticatorConfig - The configuration for the authenticator
 * @returns An Authenticator instance based on the specified type
 * @throws Error if the authenticator type is unknown
 */
export declare function getAuthenticatorByType<T extends keyof typeof Authenticators>(authenticatorType: T, authenticatorConfig: ConstructorParameters<(typeof Authenticators)[T]>[0]): InstanceType<(typeof Authenticators)[T]>;
export { BaseAuthenticator } from './authenticators/_baseAuthenticator.js';
export { type ActiveDirectoryAuthenticatorConfiguration, ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js';
export { type ADWebAuthAuthenticatorConfiguration, ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js';
export { type FunctionAuthenticatorConfiguration, FunctionAuthenticator } from './authenticators/functionAuthenticator.js';
export { type PlainTextAuthenticatorConfiguration, PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js';
