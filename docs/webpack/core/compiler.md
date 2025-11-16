# How Compiler source works

## At Runtime

### Run method

- This method takes a callback argument
- It then checks if there's another compilation running,the throws an error if it is.
- It then defines a `finish` functin that will be run once compilation has completed
