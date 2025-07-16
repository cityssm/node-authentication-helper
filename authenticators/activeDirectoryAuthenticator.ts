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
      ldapClientOptions as LdapClientOptions,
      activeDirectoryAuthenticateOptions
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
