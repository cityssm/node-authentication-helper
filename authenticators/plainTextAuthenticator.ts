// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable security/detect-object-injection */

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export type PlainTextAuthenticatorConfiguration = Record<string, string>

/**
 * This should only be used when testing, say, inside of a GitHub Action.
 * Never use this in production!!!
 */
export class PlainTextAuthenticator implements BaseAuthenticator {
  readonly #alternativeAuthenticator: BaseAuthenticator | undefined
  readonly #users: PlainTextAuthenticatorConfiguration

  /**
   * @param config - User name/password combinations
   * @param alternativeAuthenticator - An optional Authenticator to use when the user name is not found in the configuration.
   */
  constructor(
    config: PlainTextAuthenticatorConfiguration,
    alternativeAuthenticator?: BaseAuthenticator
  ) {
    this.#users = config
    this.#alternativeAuthenticator = alternativeAuthenticator
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
