# Authentication Helper

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/authentication-helper)](https://www.npmjs.com/package/@cityssm/authentication-helper)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-authentication-helper.svg/?label=active+issues&show_trend=true&token=kzXregn-tFVPIFYrt8QqEeSb)](https://app.deepsource.com/gh/cityssm/node-authentication-helper/)

Handles the authentication requests for web applications.
Standardizes each method to allow for easier switching.

Supports:

- [Active Directory](https://github.com/cityssm/node-activedirectory-authenticate)
- [AD Web Auth](https://github.com/cityssm/ad-web-auth)
- Function - Implement your own!
- Plain Text (_for testing purposes only!!!_)

## Installation

```sh
npm install @cityssm/authentication-helper
```

## Usage

```javascript
import { ActiveDirectoryAuthenticator } from '@cityssm/authentication-helper'

const authenticator = new ActiveDirectoryAuthenticator(config)

await authenticator.authenticate('domain\\user', 'p@ssw0rd')
```
