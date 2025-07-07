import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  ActiveDirectoryAuthenticator,
  ADWebAuthAuthenticator,
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

await describe('ActiveDirectoryAuthenticator', async () => {
  const authenticator = new ActiveDirectoryAuthenticator(activeDirectoryConfig)

  await it('Returns "true" for valid credentials', async () => {
    assert.ok(
      await authenticator.authenticate(
        activeDirectoryUserName,
        activeDirectoryPassword
      )
    )
  })

  await it('Returns "false" for invalid credentials', async () => {
    assert.ok(
      !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
    )
  })
})

await describe('ADWebAuthAuthenticator', async () => {
  const authenticator = new ADWebAuthAuthenticator(adWebAuthConfig)

  await it('Returns "true" for valid credentials', async () => {
    assert.ok(
      await authenticator.authenticate(
        activeDirectoryUserName,
        activeDirectoryPassword
      )
    )
  })

  await it('Returns "false" for invalid credentials', async () => {
    assert.ok(
      !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
    )
  })
})

await describe('PlainTextAuthenticator', async () => {
  await describe('With Alternative Authenticator', async () => {
    const authenticator = new PlainTextAuthenticator(
      plainTextConfig,
      new ADWebAuthAuthenticator(adWebAuthConfig)
    )

    await it('Returns "true" for valid plain text credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          Object.values(plainTextConfig)[0]
        )
      )
    })

    await it('Returns "false" for invalid plain text credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          `${Object.values(plainTextConfig)[0]}x`
        ))
      )
    })

    await it('Returns "true" for valid alternative credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          activeDirectoryUserName,
          activeDirectoryPassword
        )
      )
    })

    await it('Returns "false" for invalid alternative credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x'))
      )
    })
  })

  await describe('Without Alternative Authenticator', async () => {
    const authenticator = new PlainTextAuthenticator(plainTextConfig)

    await it('Returns "true" for valid credentials', async () => {
      assert.ok(
        await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          Object.values(plainTextConfig)[0]
        )
      )
    })

    await it('Returns "false" for invalid credentials', async () => {
      assert.ok(
        !(await authenticator.authenticate(
          Object.keys(plainTextConfig)[0],
          `${Object.values(plainTextConfig)[0]}x`
        ))
      )
    })
  })
})
