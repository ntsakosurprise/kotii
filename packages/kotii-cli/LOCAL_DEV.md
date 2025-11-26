# Kotii-Cli Development

NPM

> **RUN:** `npm i /Users/path/to/my/kotii/clone/kotii/packages/kotii-cli/kotii-cli-version-number.tgz -g`<br /><br> Please note that version number may be different based on the script that you run for your desired-local-testing version, for example, as of this writing, the version number is `1.0.0`. This means that the part of the path for version will be: `kotii-cli-1.0.0.tgz`, and the full command will be: `npm i /Users/path/to/my/kotii/clone/kotii/packages/kotii-cli/kotii-cli-1.0.0.tgz`

- PNPM

  > **RUN:** `pnpm add /Users/path/to/my/kotii/clone/kotii/packages/kotii-cli/kotii-cli-version-number.tgz -g`<br /><br> Please note that version number may be different based on the script that you run for your desired-local-testing version, for example, as of this writing, the version number is `1.0.0`. This means that the part of the path for version will be: `kotii-cli-1.0.0.tgz`

- YARN
  > **RUN:** `yarn add /Users/path/to/my/kotii/clone/kotii/packages/kotii-cli/kotii-cli-version-number.tgz -g`<br /><br> Please note that version number may be different based on the script that you run for your desired-local-testing version, for example, as of this writing, the version number is `1.0.0`. This means that the part of the path for version will be: `kotii-cli-1.0.0.tgz`

### Kotii-cli commands

- create-app
- help
- version

### Create-app

<p>

To create your new app based on the TLB, you need to open a terminal window on your computer and type the following command to create a
new app: `kotii create-app app-name --packager npm`

</p>

<p> Exapmple:  `jonentsakodoe@jonentsako ~ % kotii create-app to-do-app --packager yarn` </p>

- With default config: `kotii create-app new-with-pnpm --yes --packager pnpm`
- With local scripts: `kotii create-app new-with-pnpm --yes --packager pnpm --local-scripts /Users/surprisemashele/Documents/kotii`
