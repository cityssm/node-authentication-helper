import assert from 'node:assert'
import { describe, it } from 'node:test'

import { FunctionAuthenticator } from '../authenticators/functionAuthenticator.js'
import { getAuthenticatorByType } from '../index.js'

const asyncAuthenticateFunction = async (
  userName: string,
  password: string
): Promise<boolean> =>
  // eslint-disable-next-line promise/avoid-new
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(userName === 'testUser' && password === 'testPassword')
    }, 100)
  })

const authenticateFunction = (userName: string, password: string): boolean =>
  userName === 'testUser' && password === 'testPassword'

await describe('FunctionAuthenticator', async () => {
  await describe('With an async authenticate function', async () => {
    const authenticator = getAuthenticatorByType('function', {
      authenticate: asyncAuthenticateFunction
    })

    await it('Returns "true" for valid credentials', async () => {
      assert.ok(await authenticator.authenticate('testUser', 'testPassword'))
    })

    await it('Returns "false" for invalid credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate('testUser', 'wrongPassword'))
      )
    })
  })

  await describe('With a synchronous authenticate function', async () => {
    const authenticator = new FunctionAuthenticator({
      authenticate: authenticateFunction
    })

    await it('Returns "true" for valid credentials', async () => {
      assert.ok(await authenticator.authenticate('testUser', 'testPassword'))
    })

    await it('Returns "false" for invalid credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate('testUser', 'wrongPassword'))
      )
    })
  })
})
