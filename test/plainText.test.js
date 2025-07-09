import assert from 'node:assert';
import { describe, it } from 'node:test';
import { ADWebAuthAuthenticator, instantiateAuthenticatorByType, PlainTextAuthenticator } from '../index.js';
import { activeDirectoryPassword, activeDirectoryUserName, activeDirectoryUserNameInvalid, adWebAuthConfig, plainTextUsers } from './config.js';
await describe('PlainTextAuthenticator', async () => {
    await describe('With Alternative Authenticator', async () => {
        const authenticator = instantiateAuthenticatorByType('plainText', {
            alternativeAuthenticator: new ADWebAuthAuthenticator(adWebAuthConfig),
            users: plainTextUsers
        });
        await it('Returns "true" for valid plain text credentials', async () => {
            assert.ok(await authenticator.authenticate(Object.keys(plainTextUsers)[0], Object.values(plainTextUsers)[0]));
        });
        await it('Returns "false" for invalid plain text credentials', async () => {
            assert.ok(!(await authenticator.authenticate(Object.keys(plainTextUsers)[0], `${Object.values(plainTextUsers)[0]}x`)));
        });
        await it('Returns "true" for valid alternative credentials', async () => {
            assert.ok(await authenticator.authenticate(activeDirectoryUserName, activeDirectoryPassword));
        });
        await it('Returns "false" for invalid alternative credentials', async () => {
            assert.ok(!(await authenticator.authenticate(activeDirectoryUserNameInvalid, 'x')));
        });
    });
    await describe('Without Alternative Authenticator', async () => {
        const authenticator = new PlainTextAuthenticator({ users: plainTextUsers });
        await it('Returns "true" for valid credentials', async () => {
            assert.ok(await authenticator.authenticate(Object.keys(plainTextUsers)[0], Object.values(plainTextUsers)[0]));
        });
        await it('Returns "false" for invalid credentials', async () => {
            assert.ok(!(await authenticator.authenticate(Object.keys(plainTextUsers)[0], `${Object.values(plainTextUsers)[0]}x`)));
        });
    });
});
