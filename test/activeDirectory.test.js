import assert from 'node:assert';
import { describe, it } from 'node:test';
import { instantiateAuthenticatorByType } from '../index.js';
import { activeDirectoryConfig, activeDirectoryPassword, activeDirectoryUsername, activeDirectoryUsernameInvalid } from './config.js';
await describe('ActiveDirectoryAuthenticator', async () => {
    const authenticator = instantiateAuthenticatorByType('activeDirectory', activeDirectoryConfig);
    await it('Returns "true" for valid credentials', async () => {
        assert.ok(await authenticator.authenticate(activeDirectoryUsername, activeDirectoryPassword));
    });
    await it('Returns "false" for invalid credentials', async () => {
        assert.ok(!(await authenticator.authenticate(activeDirectoryUsernameInvalid, 'x')));
    });
});
