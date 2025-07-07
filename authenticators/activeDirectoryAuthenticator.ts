import ActiveDirectory from 'activedirectory2'

import type { BaseAuthenticator } from './_baseAuthenticator.js'

export interface ActiveDirectoryAuthenticatorConfiguration {
  url: string
  baseDN: string
  username: string
  password: string
}

export class ActiveDirectoryAuthenticator implements BaseAuthenticator {
  readonly #activeDirectory: ActiveDirectory

  constructor(config: ActiveDirectoryAuthenticatorConfiguration) {
    this.#activeDirectory = new ActiveDirectory(config)
  }

  async authenticate(userName: string, password: string): Promise<boolean> {
    if (userName === '' || password === '') {
      return false
    }

    // eslint-disable-next-line promise/avoid-new
    return await new Promise<boolean>((resolve) => {
      try {
        this.#activeDirectory.authenticate(
          userName,
          password,
          (error, auth) => {
            if ((error ?? '') !== '') {
              resolve(false)
            }

            resolve((auth ?? false) as boolean)
          }
        )
      } catch {
        resolve(false)
      }
    })
  }
}
