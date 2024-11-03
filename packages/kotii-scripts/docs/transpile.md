**Kotii-Transpile**

Kotii transpile is used to transpile some internal files and plugins from a jsx format to a javascripts format for production environment.

Reason

We transpile these files ahead of time to prevent transpilation during run-time. The transpilation process is resource-heavy as it involves nodejs's I/O operations. Pre-transpiling these files ensures that they are ready for normal, minimal loading by nodejs' runtime, this in turn helps improve nodejs's load time.

How to transpile

To begin the transpilation process, run the command _npm babel-transpile_ on kotii's monorepo root

How transpilation works

- It begins with an invocation of the transpileFiles() function that takes an object of files to be transpiled.
- The transpileFiles function loops through the files checking if a current item is a file or folder
- It then reads a given file's code from disk
- The raw code is then converted to ast
- The ast is traversed to replace any none-standard javascript or nodejs code(parsing)
- The updated source code is then converted back to a raw code string and saved in memory with .js extension
