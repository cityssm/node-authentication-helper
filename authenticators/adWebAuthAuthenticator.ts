import {
  type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration,
  AdWebAuthConnector
} from '@cityssm/ad-web-auth-connector'

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export class ADWebAuthAuthenticator implements BaseAuthenticator {
  readonly #adWebAuth: AdWebAuthConnector

  constructor(config: ADWebAuthAuthenticatorConfiguration) {
    this.#adWebAuth = new AdWebAuthConnector(config)
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    return await this.#adWebAuth.authenticate(username, password)
  }
}

export { type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration } from '@cityssm/ad-web-auth-connector'
