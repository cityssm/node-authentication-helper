import {
  type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration,
  AdWebAuthConnector
} from '@cityssm/ad-web-auth-connector'

import { type BaseAuthenticator } from './_baseAuthenticator.js'

export class ADWebAuthAuthenticator implements BaseAuthenticator {
  readonly #adWebAuth: AdWebAuthConnector

  constructor(config: ADWebAuthAuthenticatorConfiguration) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.#adWebAuth = new AdWebAuthConnector(config)
  }

  async authenticate(userName: string, password: string): Promise<boolean> {
    return await this.#adWebAuth.authenticate(userName, password)
  }
}

export { type ADWebAuthConfig as ADWebAuthAuthenticatorConfiguration } from '@cityssm/ad-web-auth-connector'
