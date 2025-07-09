import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getAuthenticatorByType } from '../index.js';
import { activeDirectoryConfig, activeDirectoryPassword, activeDirectoryUserName, activeDirectoryUserNameInvalid } from './config.js';
await describe('ActiveDirectoryAuthenticator', async () => {
    const authenticator = getAuthenticatorByType('activeDirectory', activeDirectoryConfig);
    await it('Returns "true" for valid credentials', async () => {
        assert.ok(await authenticator.authenticate(activeDirectoryUserName, activeDirectoryPassword));
    });
    await it('Returns "false" for invalid credentials', async () => {
        assert.ok(!(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x')));
    });
});
