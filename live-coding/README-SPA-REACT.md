# Live-coding

## SPA - REACT 

[09/06/2020](jun/09-06/first-app)

- What is a Single Page Application? Why do we need it?
- MVC Concepts
- React intro: Why react? React vs. Web Component Standard"
- Rendering: `ReactDOM.render(<html>, <DOMElement>)`
- First component definition: ""A functional component returns HTML to render""
- Render your first component: `const Hello = () => <h1>Hello React</h1>`"
- Starting a react project: `npx create-react-app <app name>`
- Reviewing `react-scripts` in package.json
- Project organization I: `src` vs. `public` folders, the `build` folder
- Bootstrapping react: `index.js`
- Including styles: `import <path to css>`
- `App.js`, the boilerplate `App` component
- `import <image name> from <path to image>`
- `<img src={imageName} alt=""..."" />`

[10/06/2020](jun/10-06)

- Build your own React App without create-react-app [click here to find the steps](https://github.com/FBw-26/lessons/blob/master/SPA-REACT-README.md)

[11/06/2020](jun/11-06)

- `class SomeComponent extends React.Component`
- JSX 
- the `render(){ ... }` method
- Props in classes: `this.props` vs. `props` as parameter
- When to use: Class components vs. functional components
- Conditional rendering: `{ <boolean variable> ? <JSX 1> : <JSX 2> }`
`{ <array variable>.map(item => (<JSX>)) }`, the `key` property

Project: To Do List with REACT

[15/06/2020](jun/15-06)

- Multi-line templates: `const <component name> = () => (<JSX>)`
- One element per component: `React.Fragment` for multiple html tags
- Put the JS in JSX: Using `{}` for JS expression interpolation
- Project organization II: The `components` folder
- Exporting and Importing components
- Using Components in JSX: `<ComponentName />`
- `const <component name> = (props) => (<p>{props.propName)</p>)`
- `<SomeComponent propName={data} />`
- the `value={this.state.propertyName}`, the `onChange` event handler
- Manipulating state in events: `this.setState(<new state>)`

- The ToDo list from last week.

Project: Add new features to the ToDo List

[16/06/2020](jun/16-06)

- `constructor(){ this.someHandler = this.someHandler.bind(this) }`
- Functions in React

Project: Instagram MockUp with React and SASS

[17/06/2020](jun/17-06)

- Review from previous lessons [instagram-clone](jun/instagram-clone) 

- state in react components
- the `value={this.state.propertyName}`, the `onChange` event handler
- Handling multiple inputs with one `onChange` handler
- `Form`
- `regex`

Project: continue Instagram MockUp

18/06/2020

- [Review of ToDo list](jun/15-06)

Project:  Morse translator with React

[22/06/2020](jun/22-06)

- Lifecycle methods `componentDidMount()`, `componentDidUpdate()`, `shouldComponentUpdate()`

[23/06/2020](jun/23-06)

- Review from previous lessons
- Creating a simple spinner component with `fontawsome`
- Conditionally rendering component with spinner before data is retrieved
- Retrieving data on `componentDidMount()` and updating component state
- `Axios`

Project: country API

[24/06/2020](jun/24-06)

- Review from previous lessons
- Creating an Online Shop 

- The solution for [Country API](jun/23-06)

Project: Add more functionality to Online shop 


[25/06/2020](jun/24-06)

- Review from previous lessons

- More functionality added to [Online shop](jun/24-06)


[29/06/2020](jun/29-06)
- Wrapping our app with a `<BrowserRouter>` container component
- Conditionally render according to URL: the `<Route>` component
- Choosing only one route to render: `<Switch>`
- Pitfalls: Order paths in `<Switch>`, Rendering exact paths with `exact`
- Using `<Link>` to navigate to a path 
- Creating dynamic route paths with route params: the `/:<param>` notation
- Route props: Accessing route params with the `match.params` prop

Adding more functionality to Online shop

[30/06/2020](jun/30-06)

- `redux.createStore(<callback>)`
- `(<current state>, <string payload>) => <new state>`
- `store.dispatch(<string payload>)`
-  `store.dispatch({type: <string>, data: <additional payload>})`
-  `const <action name> = (<payload>) => ({type: <string>, data: <payload>})
- Debugging Redux: Redux DevTools
- The `react-redux` component library
- Providing a store to our app: `<Provider store=""""[...]"""">`
- Project Organization V: 
  The `store` directory, The `actions` and `reducers` sub directories
- Splitting reducers: Using `redux.combineReducers()` for complex stores

[01/07/2020](july/01-07)

- Redux review
- Using Redux with Online Shop
- Deployment with Gh-pages

Project: continue Online Shop

[02/07/2020](july/01-07)

- Redux review
- Using Redux with Online Shop
- [Redux simplified](july/redex-simplified)

Project: continue Online Shop

[06/07/2020](july/06-07)

- State without class: React hooks `useState`
- [Review React basics](july/react-basics) 

Project: Refactor ToDo List with React Hooks

[07/07/2020](july/07-07)

- Context API `useContext`
- React Hooks review

Project: Refactor Online Shop with React Hooks

[08/07/2020](https://github.com/FBw-26/lessons/blob/master/MORE_DEVELOPER_TOOLS_README.md)

- [Developer Tools](https://github.com/FBw-26/lessons/blob/master/MORE_DEVELOPER_TOOLS_README.md) 

- Preparation for Group Projects with React.

#### 09/07/2020 to 16/07/2020
##### Group projects with React:

- [dtravel](https://github.com/bidodev/dtravel)

- [zamagana_synth](https://github.com/gabrielaacha/zamagana_synth)

- [code-natives](https://github.com/Romain-Grandjean/code-natives)

- [FLUXUS](https://github.com/Mauricio-Sotela/group_project)

