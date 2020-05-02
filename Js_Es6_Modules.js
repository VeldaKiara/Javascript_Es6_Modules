//Modules in JavaScript allow you to split JavaScript Apps up into 
//separate chuncks that can be imported when needed.

//Importance of Modules.
//Maintainability,Resusabaility,Perfomance and Productivity

//export : is used to expose public variables, objects, classes and functions.

// Add.js
const Add = () =>{
    return a + b;
 }
 
 export { Add }

 //import : is then used to pull items from a module into another script or module.

 // App.js
 import { Sum } from './Add.js';
 console.log( Add(1, 2) ); // 3

 //A single export statement can be used as shown below
 export { Add, Subtract };

 //A single import statement can be used as shown below for all public items.
 import { Add, Subtract } from './Calculator.js';

 //Or use export as you declare a function, an object, a class or a variable.

 // export a function
 export const Add = () => {
    return a + b ;
  }
  
  // an object
  export let person = {
     name : "Velda Kiara",
     age : 21
  }

  // or a variable
  export let name = `Velda Kiara`;

//Or use as and * to import all exports from a given module.
import * as App from './Calculator.js';
    
  // using each import e.g
  App.Add(4, 5);
  App.Divide(3, 2);

//Or use as to import an export or exports from a given module (helps to prevent naming problems).

import { user as Bio } from './Users.js';
import { sum as Add, product as Multiply } from './Calculator.js';

//It's possible to re-export a module - also called aggregating

// re-export a module
export { name } from './Module.js';

// an equivalent to
import { name } from './Module.js';
export name;


//There are two different types of export, named and default. 
//You can have multiple named exports per module but only one default export.

//All module import scripts must be loaded by setting a type="module" attribute in the script tag

//<script type="module" src="./App.js"></script>

