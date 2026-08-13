import assert from "node:assert"
import { describe, it } from "node:test"

import { ADWebAuthAuthenticator } from "../authenticators/adWebAuthAuthenticator.js"

import { activeDirectoryPassword, activeDirectoryUsername, activeDirectoryUsernameInvalid, adWebAuthConfig } from "./config.js"

await describe('ADWebAuthAuthenticator', async () => {
  const authenticator = new ADWebAuthAuthenticator(adWebAuthConfig)

  await it('Returns "true" for valid credentials', async () => {
    assert.ok(
      await authenticator.authenticate(
        activeDirectoryUsername,
        activeDirectoryPassword
      )
    )
  })

  await it('Returns "false" for invalid credentials', async () => {
    assert.ok(
      !(await authenticator.authenticate(activeDirectoryUsernameInvalid, 'x'))
    )
  })
})
