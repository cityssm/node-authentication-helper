/* eslint-disable security/detect-object-injection */

import ActiveDirectoryAuthenticate, {
  type ActiveDirectoryAuthenticateConfig,
  type LdapClientOptions
} from '@cityssm/activedirectory-authenticate'

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export type ActiveDirectoryAuthenticatorConfiguration =
  ActiveDirectoryAuthenticateConfig & LdapClientOptions

export class ActiveDirectoryAuthenticator implements BaseAuthenticator {
  readonly #activeDirectoryAuthenticator: ActiveDirectoryAuthenticate

  constructor(config: ActiveDirectoryAuthenticatorConfiguration) {
    const ldapClientOptions: Partial<LdapClientOptions> = {}

    const activeDirectoryAuthenticateOptions: ActiveDirectoryAuthenticateConfig =
      {
        baseDN: config.baseDN,
        bindUserDN: config.bindUserDN,
        bindUserPassword: config.bindUserPassword,
        cacheUserBindDNs: config.cacheUserBindDNs ?? true
      }

    for (const key in config) {
      if (!(key in activeDirectoryAuthenticateOptions)) {
        ldapClientOptions[key] = config[key]
      }
    }

    this.#activeDirectoryAuthenticator = new ActiveDirectoryAuthenticate(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      ldapClientOptions as LdapClientOptions,
      activeDirectoryAuthenticateOptions
    )
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    const result = await this.#activeDirectoryAuthenticator.authenticate(
      username,
      password
    )

    return result.success
  }
}
