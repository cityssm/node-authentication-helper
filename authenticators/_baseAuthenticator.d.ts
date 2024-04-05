export declare class BaseAuthenticator {
    /**
     * Returns true when successfully authenticated.
     */
    authenticate: (userName: string, password: string) => Promise<boolean>;
}
