# What is webpack?

[webpack](https://github.com/webpack/webpack) is a module bundler that combines multiple files
into a single file. The resulting single file is refered to as a `bundle`.

### How are files combined?

Webpack takes an entry file, usually an index file that is a starting point for a specific project.
The index file in this context will be the main or root file of the project where the starting program
code is stored.

A project is an app/system/program that you are building. In most projects, this file is usually
named index.[ext] where `ext` could be any file extension, in most cases for javascript projects,
this file is commonly named either `index.js` or `index.ts`.
