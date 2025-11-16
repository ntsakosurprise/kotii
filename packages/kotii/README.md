
# Introduction



Anzii-cli is a command line tool for Anzii backend framework. 

It is used to automate tasks that are typically taken when building applications with [Anziijs](https://www.npmjs.com/package/anzii).


# Installation 

  ```
  npm install -g anzii-cli 
  
  ```

# Usage 

## Create App

  `anzii create-anzii-app portfolio` 

## Anzii-cli commands

***create-anzii-app***

 The `create-anzii-app` commmand is used to generate an anzii powered app. The command takes a couple of options as arguments. The first option immediately following the command is a repository(folder) name of the app you are creating.

 Anzii-cli currently supports two main templates, these templates are configured for cli and web applications. The structure of the `web` template is configured to be suitable for **api, backend, and web apps**

#### Options 

--cli

The --cli `(anzii create-anzii-app portfolio --cli)` optional flag is used to denote the app as a command line program that should be interpreted by a shell. 

--web

The --web `(anzii create-anzii-app portfolio --web)` optional flag is used to denote the app as a web application that can be used a backend, an api, or as a traditonal web app that can render html. 

--git

The --git `(anzii create-anzii-app portfolio --git)` optional flag is used to denote that the directory being created should include git. 

--remote

The --remote `(anzii create-anzii-app portfolio --remote)` optional flag is used to denote that the app being created should have a remote repository. 

--install 

The --install `(anzii create-anzii-app portfolio --install)` optional flag is used to denote that the app being created should install depended  packages.

--yes 

The --yes `(anzii create-anzii-app portfolio --yes)` optional flag is used to denote that the app being created should use anzii-cli set defaults. 


***help***

 The `command` commmand is used to display help 

***version***

 The `command` commmand is used to display help 



# Issues

Please make sure to read the Issue Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in the release notes.


# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).




# Contribution

Please make sure to read the Contributing Guide before making a pull request. If you have a anzii-related plugins, add it with a pull request.
 

# License 

[MIT](https://.github.com/).


Copyright (c) 2019-present, iiprodatks. Ntsako (Surprise) Mashele 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

A Special thanks to iiprodakts for allowing me the opportunity to work on anzii-cli for anziijs.