import { ActiveDirectoryAuthenticator } from './authenticators/activeDirectoryAuthenticator.js'
import { ADWebAuthAuthenticator } from './authenticators/adWebAuthAuthenticator.js'
import { FunctionAuthenticator } from './authenticators/functionAuthenticator.js'
import { PlainTextAuthenticator } from './authenticators/plainTextAuthenticator.js'

const Authenticators = {
  activeDirectory: ActiveDirectoryAuthenticator,
  adWebAuth: ADWebAuthAuthenticator,
  function: FunctionAuthenticator,
  plainText: PlainTextAuthenticator
} as const

export type AuthenticatorType = keyof typeof Authenticators

/**
 * Factory function to create an authenticator based on the specified type.
 * @param authenticatorType - The authenticator to create ('activeDirectory' | 'adWebAuth' | 'function | 'plainText')
 * @param authenticatorConfig - The configuration for the authenticator
 * @returns An Authenticator instance based on the specified type
 * @throws Error if the authenticator type is unknown
 */
export function getAuthenticatorByType<
  T extends keyof typeof Authenticators
>(
  authenticatorType: T,
  authenticatorConfig: ConstructorParameters<(typeof Authenticators)[T]>[0]
): InstanceType<(typeof Authenticators)[T]> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const Authenticator = Authenticators[authenticatorType] as unknown as
    | (new (
        config: ConstructorParameters<(typeof Authenticators)[T]>[0]
      ) => InstanceType<(typeof Authenticators)[T]>)
    | undefined

  if (Authenticator === undefined) {
    throw new Error(`Unknown authenticator type: ${authenticatorType}`)
  }

  return new Authenticator(authenticatorConfig)
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
  type FunctionAuthenticatorConfiguration,
  FunctionAuthenticator
} from './authenticators/functionAuthenticator.js'

export {
  type PlainTextAuthenticatorConfiguration,
  PlainTextAuthenticator
} from './authenticators/plainTextAuthenticator.js'
