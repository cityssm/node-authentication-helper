export declare abstract class BaseAuthenticator {
    /**
     * Returns true when successfully authenticated.
     */
    abstract authenticate: (userName: string, password: string) => Promise<boolean>;
}
