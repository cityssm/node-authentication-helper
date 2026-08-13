import type { BaseAuthenticator } from './_baseAuthenticator.js'

export interface FunctionAuthenticatorConfiguration {
  authenticate: (
    username: string,
    password: string
  ) => boolean | Promise<boolean>
}

export class FunctionAuthenticator implements BaseAuthenticator {
  readonly #authenticateFunction: (
    username: string,
    password: string
  ) => boolean | Promise<boolean>

  constructor(config: FunctionAuthenticatorConfiguration) {
    this.#authenticateFunction = config.authenticate
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    return await this.#authenticateFunction(username, password)
  }
}
