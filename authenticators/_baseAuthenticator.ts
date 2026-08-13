export abstract class BaseAuthenticator {
  /**
   * Returns true when successfully authenticated.
   */
  abstract authenticate: (username: string, password: string) => Promise<boolean>
}
