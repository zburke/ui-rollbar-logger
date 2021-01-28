# ui-rollbar-logger

Copyright (C) 2021 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

This package includes a single class with a static function, `eventHandler`,
that listens for events of type `ERROR` and returns a handler function
that logs its arguments, anticipating they are the same that are passed
to `componentDidCatch`, with Rollbar.

Like any stripes module, this module must be added to the platform's
`package.js` file and the `stripes.config.js` `modules` object to be
accessible to stripes.

Rollbar may be configured by including the following in `stripes.config.js`
at build time:

```
errorLogging: {
  rollbar: {
    accessToken: 'some-token',
    captureUncaught: true,
    captureUnhandledRejections: true,
  },  
}
```

See https://docs.rollbar.com/docs/react for additional configuration details.

## Additional information

Other [modules](https://dev.folio.org/source-code/#client-side).

Other FOLIO Developer documentation is at [dev.folio.org](https://dev.folio.org/)
