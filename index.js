//! module
//common js

// const { add, sub } = require("./math");
// console.log(add);

//esmodule
// default import
// import add from "./esmodule.js";
//named import
// import { add, sub } from "./esmodule.js";
// console.log(add(12, 2));
// console.log(sub(12, 2));

//types of module
//common js =>require()
//ESmodule => import/export

//JSON => js object notation

let user = {
  name: "sudan",
  email: "sudan@gmail.com",
};

const json = JSON.stringify(user);

console.log(user);
console.log(json);

console.log(JSON.parse(json).name);

//npm, pnpm, yarn
//npm init => initialize empty node project
//npm init -y =>initialize empty node project
//npm run <script-name> =>run script name
//npm install <packagename> npm i <packagename>@version
// npm i url@0.7.9
//npm uninstall <packagename>
