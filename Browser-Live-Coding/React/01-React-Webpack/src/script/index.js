//npm init (initialize our project with npm)
//npm install webpack (we are installing webpack)

import "!style-loader!css-loader!../css/style.css"
import {button} from "./main.js"
import {changeBackground} from "./eventhandler.js"
import moment from "moment"
console.log(moment().format("LT"))



button.addEventListener("click",changeBackground)