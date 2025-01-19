# Learning-Typescript
What is typescript?
TypeScript is a programming language developed and maintained by Microsoft. 
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

Typescript compiler
tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
    esbuild
    swc

Step 1 - Install tsc/typescript globally
npm install -g typescript

Step 2 - Initialize an empty Node.js project with typescript
    mkdir node-app
    cd node-app
    npm init -y
    npx tsc --init