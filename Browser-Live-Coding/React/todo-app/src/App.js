import React from "react";
import "./css/App.scss";
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import {v4} from "uuid"
//User interface (UI) unit (Component)

console.log(localStorage);
/* let data = {
  name:"Ali",
  age:23
} */
/* JSON.stringify() convert data into string
  JSON.parse() convert back to its original form (if you are using synchronous code)*/

//json() when you are working with asynchronous code to parse the data
/* localStorage.setItem("data", JSON.stringify(data)) */

/* console.log(JSON.parse(localStorage.getItem("data")).age) */
/* localStorage.removeItem("data") */

class App extends React.Component {
  state = {
    todoItems: [],
  };

  componentDidMount() {
    //onload
    let data = localStorage.getItem("todoapp");
    if (data) {
      let convertedData = JSON.parse(data);
      this.setState({
        todoItems: convertedData,
      });
    }
  }

  addItem = (value) => {
    console.log(this, "this is from App");
    let item = { id: v4(), text: value, done: false };
    let copystate = [...this.state.todoItems];
    copystate.push(item);
    this.setState(
      {
        todoItems: copystate,
      },
      () => {
        localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
      }
    );

    /*  this.setState({
        todoItems:[...this.state.todoItems, item]
      },()=>{
      localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems))
    } ) */
  };

  updateItem = (id) => {
    let updatedItems = this.state.todoItems.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      todoItems: updatedItems,
    },  () => {
      localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
    });
  };

  deleteItem=(id)=>{
     /*  let CopyState=[...this.state.todoItems] */
      let updatedData = this.state.todoItems.filter(item=>item.id!==id)
      this.setState({
        todoItems:updatedData
      },()=>{
        localStorage.setItem("todoapp", JSON.stringify(this.state.todoItems));
      })
  }

  render() {
    let toDos = this.state.todoItems.filter((item) => !item.done);
    let toDones = this.state.todoItems.filter((item) => item.done);
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          {/*  <Route path="/" render={(props)=><div ><ToDosContainer
              {...props}
              toDos={toDos}
              addItem={this.addItem}
              updateItem={this.updateItem}
            />
            <ToDonesContainer 
            {...props}
            toDones={toDones} updateItem={this.updateItem} /></div>}/>
 */}
          {/*  switch(condition){
    case 1:
    case 2:
    default:
 } */}
          <Switch>
            <Route exact path="/">
              <ToDosContainer
                toDos={toDos}
                addItem={this.addItem}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
              <ToDonesContainer
                toDones={toDones}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
            </Route>
            <Route path="/about" component={About} />
            <Route component={NotFound} /> {/* "Default Case" */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
