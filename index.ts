// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */

import type { BaseAuthenticator } from './authenticators/_baseAuthenticator.js'
import {
  type ActiveDirectoryAuthenticatorConfiguration,
  ActiveDirectoryAuthenticator
} from './authenticators/activeDirectoryAuthenticator.js'
import {
  type ADWebAuthAuthenticatorConfiguration,
  ADWebAuthAuthenticator
} from './authenticators/adWebAuthAuthenticator.js'
import {
  type PlainTextAuthenticatorConfiguration,
  PlainTextAuthenticator
} from './authenticators/plainTextAuthenticator.js'

export type AuthenticatorType = 'activeDirectory' | 'adWebAuth' | 'plainText'

export function getAuthenticatorByType(
  authenticatorType: 'activeDirectory',
  authenticatorConfig: ActiveDirectoryAuthenticatorConfiguration
): ActiveDirectoryAuthenticator

export function getAuthenticatorByType(
  authenticatorType: 'adWebAuth',
  authenticatorConfig: ADWebAuthAuthenticatorConfiguration
): ADWebAuthAuthenticator

export function getAuthenticatorByType(
  authenticatorType: 'plainText',
  authenticatorConfig: PlainTextAuthenticatorConfiguration
): PlainTextAuthenticator

/**
 * Factory function to create an authenticator based on the specified type.
 * @param authenticatorType - The authenticator to create ('activeDirectory' | 'adWebAuth' | 'plainText')
 * @param authenticatorConfig - The configuration for the authenticator
 * @returns A BaseAuthenticator instance based on the specified type
 * @throws Error if the authenticator type is unknown
 */
export function getAuthenticatorByType(
  authenticatorType: AuthenticatorType,
  authenticatorConfig: unknown
): BaseAuthenticator {
  switch (authenticatorType) {
    case 'activeDirectory': {
      return new ActiveDirectoryAuthenticator(
        authenticatorConfig as ActiveDirectoryAuthenticatorConfiguration
      )
    }

    case 'adWebAuth': {
      return new ADWebAuthAuthenticator(
        authenticatorConfig as ADWebAuthAuthenticatorConfiguration
      )
    }

    case 'plainText': {
      return new PlainTextAuthenticator(
        authenticatorConfig as PlainTextAuthenticatorConfiguration
      )
    }

    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    default: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown authenticator type: ${authenticatorType}`)
    }
  }
}

export { BaseAuthenticator } from './authenticators/_baseAuthenticator.js'

export {
  type ActiveDirectoryAuthenticatorConfiguration,
  ActiveDirectoryAuthenticator
} from './authenticators/activeDirectoryAuthenticator.js'

export {
  type ADWebAuthAuthenticatorConfiguration,
  ADWebAuthAuthenticator
} from './authenticators/adWebAuthAuthenticator.js'

export {
  type PlainTextAuthenticatorConfiguration,
  PlainTextAuthenticator
} from './authenticators/plainTextAuthenticator.js'
