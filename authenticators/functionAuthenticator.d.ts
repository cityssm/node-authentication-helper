import type { BaseAuthenticator } from './_baseAuthenticator.js';
export interface FunctionAuthenticatorConfiguration {
    authenticate: (userName: string, password: string) => boolean | Promise<boolean>;
}
export declare class FunctionAuthenticator implements BaseAuthenticator {
    #private;
    constructor(config: FunctionAuthenticatorConfiguration);
    authenticate(userName: string, password: string): Promise<boolean>;
}
