// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable security/detect-object-injection */

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export interface PlainTextAuthenticatorConfiguration {
  alternativeAuthenticator?: BaseAuthenticator
  users: Record<string, string>
}

/**
 * This should only be used when testing, say, inside of a GitHub Action.
 * Never use this in production!!!
 */
export class PlainTextAuthenticator implements BaseAuthenticator {
  readonly #alternativeAuthenticator: BaseAuthenticator | undefined
  readonly #users: Record<string, string>

  /**
   * @param config - Configuration for the PlainTextAuthenticator
   * @param config.users - User name/password combinations
   * @param config.alternativeAuthenticator - An optional Authenticator to use when the user name is not found in the configuration.
   */
  constructor(config: PlainTextAuthenticatorConfiguration) {
    this.#users = config.users
    this.#alternativeAuthenticator = config.alternativeAuthenticator
  }

  async authenticate(userName: string, password: string): Promise<boolean> {
    if (Object.hasOwn(this.#users, userName)) {
      return this.#users[userName] === password
    } else if (this.#alternativeAuthenticator !== undefined) {
      return await this.#alternativeAuthenticator.authenticate(
        userName,
        password
      )
    }

    return false
  }
}
