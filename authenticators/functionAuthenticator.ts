import type { BaseAuthenticator } from './_baseAuthenticator.js'

export interface FunctionAuthenticatorConfiguration {
  authenticate: (
    userName: string,
    password: string
  ) => boolean | Promise<boolean>
}

export class FunctionAuthenticator implements BaseAuthenticator {
  readonly #authenticateFunction: (
    userName: string,
    password: string
  ) => boolean | Promise<boolean>

  constructor(config: FunctionAuthenticatorConfiguration) {
    this.#authenticateFunction = config.authenticate
  }

  async authenticate(userName: string, password: string): Promise<boolean> {
    return await this.#authenticateFunction(userName, password)
  }
}
