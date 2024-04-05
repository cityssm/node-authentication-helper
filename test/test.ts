import assert from 'node:assert'

import {
  ADWebAuthAuthenticator,
  ActiveDirectoryAuthenticator,
  PlainTextAuthenticator
} from '../index.js'

import {
  activeDirectoryConfig,
  activeDirectoryPassword,
  activeDirectoryUserName,
  activeDirectoryUserNameInvalid,
  adWebAuthConfig,
  plainTextConfig
} from './config.js'

describe('ActiveDirectoryAuthenticator', () => {
  const authenticator = new ActiveDirectoryAuthenticator(activeDirectoryConfig)

  it('Returns "true" for valid credentials', async () => {
    assert.ok(
      await authenticator.authenticate(
        activeDirectoryUserName,
        activeDirectoryPassword
      )
    )
  })

  it('Returns "false" for invalid credentials', async () => {
    assert.ok(
      !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
    )
  })
})

describe('ADWebAuthAuthenticator', () => {
  const authenticator = new ADWebAuthAuthenticator(adWebAuthConfig)

  it('Returns "true" for valid credentials', async () => {
    assert.ok(
      await authenticator.authenticate(
        activeDirectoryUserName,
        activeDirectoryPassword
      )
    )
  })

  it('Returns "false" for invalid credentials', async () => {
    assert.ok(
      !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
    )
  })
})

describe('PlainTextAuthenticator', () => {
  describe('With Alternative Authenticator', () => {
    const authenticator = new PlainTextAuthenticator(
      plainTextConfig,
      new ADWebAuthAuthenticator(adWebAuthConfig)
    )

    it('Returns "true" for valid plain text credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          Object.values(plainTextConfig)[0]
        )
      )
    })

    it('Returns "false" for invalid plain text credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          `${Object.values(plainTextConfig)[0]}x`
        ))
      )
    })

    it('Returns "true" for valid alternative credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          activeDirectoryUserName,
          activeDirectoryPassword
        )
      )
    })

    it('Returns "false" for invalid alternative credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
      )
    })
  })

  describe('Without Alternative Authenticator', () => {
    const authenticator = new PlainTextAuthenticator(plainTextConfig)

    it('Returns "true" for valid credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          Object.values(plainTextConfig)[0]
        )
      )
    })

    it('Returns "false" for invalid credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          `${Object.values(plainTextConfig)[0]}x`
        ))
      )
    })
  })
})
