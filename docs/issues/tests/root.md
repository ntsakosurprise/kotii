# REPO ROOT

### <span style="color:red">**lerna ERR! Error: Invalid tag name "kotii-utils@\*": Tags may not have any characters that encodeURIComponent encodes.**

</span>

#### COMMAND RAN: `npx lerna run test`

#### SOLUTIONS:

- As this is a monorepo that uses PNPM workspace, part of the solution to successfully run the tests was switching to `pnpm run tests` commands
  > **NOTE** This is currently considered a temporary solution. We'll look into directly fixing the lerna bug.

### <span style="color:red">**cannot combine importAssertions and importAttributes plugins jest**</span>

#### COMMAND RAN: `pnpm --filter kotii test`

#### SOLUTIONS:

- install `babel-preset-current-node-syntax` plugin and add it to pnpm's ovverides key in the monorepo's root package.json
  > **NOTE** Setting this in package.json depends on the package manager in use.
