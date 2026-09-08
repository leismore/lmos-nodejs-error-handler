# lmos-nodejs-error-handler

A general error handler for [LMOS for Node.js](https://nodejs.lmos.leismore.org) project.

## Motivation

To support my customised Error class: [@leismore/lmos-nodejs-lmerror](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror), I wrote this package. It supports:

* Logging error information
* Outputting a customised HTTP response based on LMError object

## Environment

* [Node.js](https://nodejs.org)                 24
* [Express.js](https://expressjs.com)           5
* [TypeScript](https://www.typescriptlang.org)  7

## Installation

`npm install @leismore/lmos-nodejs-error-handler`

## Test

`npm test`

## Build

`npm run build`

## Examples

```typescript
import {error_handler} from '@leismore/lmos-nodejs-error-handler';

// In an Express.js application
// ...
app.use(error_handler);
// ...
```

## License

© [Leismore™](https://www.leismore.co) 2026

[MIT License](https://github.com/leismore/lmos-nodejs-error-handler/blob/main/LICENSE)

## Donation

* [Leismore™](https://github.com/sponsors/leismore) on GitHub

Help us to pay our bills, so we can focus on developing and maintaining this project.

## Authors

* [Kyle Chinn / Kai Qin / 秦凯](https://kyle.chinn.leismore.org) since 06 Sep 2019

## Dependencies

* [@leismore/lmos-nodejs-lmerror](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror)

## Credits

* [@leismore/error_handler_last](https://github.com/leismore/error_handler_last-function) (Obsoleted)




------------------------------------------------------------------------------

Product of [Leismore™ OpenSource](https://lmos.leismore.org) Project

Supported by [Leismore™](https://www.leismore.co) (Australian Business Number: 25 935 862 619)
