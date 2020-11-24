import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from "./components/App";
import "./css/style.css";

render(<StorePicker />, document.querySelector("#main"));


// ! every single class in react needs at least one method inside of it, and that method is called render, render determines what html I put on the page, or what DOM element at the end of the day do I render out to the page, and from render I return

// the render method takes two things: first some jsx which is sort of like html 
// second:  render method needs a mounting point, i need to give an actual DOM element in order to mount to the page. 
// document.querySelector or document.getElementById,  is the DOM ELEMENT , I passed id #main 
// render(<p>Heyyyy</p>), document.querySelector('#main');



