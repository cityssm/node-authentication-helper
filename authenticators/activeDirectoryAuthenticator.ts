import ActiveDirectoryAuthenticate from '@cityssm/activedirectory-authenticate'

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export interface ActiveDirectoryAuthenticatorConfiguration {
  url: string

  baseDN: string

  bindUserDN: string
  bindUserPassword: string

  cacheUserBindDNs?: boolean
}

export class ActiveDirectoryAuthenticator implements BaseAuthenticator {
  readonly #activeDirectoryAuthenticator: ActiveDirectoryAuthenticate

  constructor(config: ActiveDirectoryAuthenticatorConfiguration) {
    this.#activeDirectoryAuthenticator = new ActiveDirectoryAuthenticate(
      {
        url: config.url
      },
      {
        baseDN: config.baseDN,
        bindUserDN: config.bindUserDN,
        bindUserPassword: config.bindUserPassword,

        cacheUserBindDNs: config.cacheUserBindDNs ?? false
      }
    )
  }

  async authenticate(userName: string, password: string): Promise<boolean> {
    const result = await this.#activeDirectoryAuthenticator.authenticate(
      userName,
      password
    )

    return result.success
  }
}
