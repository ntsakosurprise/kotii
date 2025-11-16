# How is webpack source set up

## `Index.js`

The main file of webpack is conventionally named index.js. This file contains the
entry source code that initiates the webpack engine. It exports a multitude of other
files that make up webpack.

### Imports in index.js

#### static imports

- utils - Contains app utilities
- memoize - Contains a function used to cache webpack's execution results

#### Dynamic imports

- wepack[`from ./webpack.js`] - This import returns a webpack function that begins the compilation work.

## **What it does?**

- It exports a `webpack object` with a `webpack function` dynamically imported from `./webpack`
- It memoizes/cache the `webpack function`
- It then merges or attaches various features of webpack to the `webpack function`
