//when you have default import/export you can name it anything
import MyStudent, {Student1 ,Student2} from "./allclasses.js"

/* import * as myModule from "./allclasses.js"
console.log(myModule) */
/* let Student = myModule.default;
let Student1= myMudule.Student1;
let Student2= myModule.Student2; */


import {product as item} from "./items.js"




//if you import named export you have to use curly brackets
import  {randomNumber, product as productOfTwoNumbers} from "./math.js"


/* let student1= new MyStudent("ali",24)
console.log(student1.name) */


randomNumber(5,10)

productOfTwoNumbers(3,3,2)
console.log(item)



