# Live-coding

## DOM

[20/04/2020](apr/20-04)

- DOM  aka Document Object Module
- DOM tree
- Javascript in the browser: XMl, JSON, jQuery, Ajax, API
- JS Engines: V8 (Chrome, Node, Edge), SpiderMonkey (Firefox), Chakra (Internet Explorer)
- Adding javascript to HTML: The `<script>` tag, External JS with `<script src="...">`
- The Window object
- Host object
- Native object: [Global-Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
-  `window.prompt()` and `window.alert()`
- Project: The Guessing Game

[21/04/2020](apr/21-04)

- review from yesterday's lesson
- window.alert === alert
- document.querySelectorAll() will return A non-live `NodeList` 🧐
- Node tree https://dom.spec.whatwg.org/#concept-node
- `document.getElementById(<id string>)`
- `HTMLElement.style` property
- `document.querySelector(<selector string>)`
- `document.querySelectorAll(<selector string>)`
- Project: Dom-querying

[22/04/2020](apr/22-04)

- review from yesterday's lesson
- `document.write()` 
- `document.createElement(<tag name>)`
- `Element.appendChild(<Element object>)`
- `forEach`
- Project: To-Do List with Sass and DOM
- [Dom-querying-solution](apr/22-04/DOM-Q)

[23/04/2020](apr/23-04)

- review from this week's lessons (`querySelector`, `functions`, `forEach`, `appendChild`)
- `createTextNode`
- Project: continues To-Do List with Sass and DOM (extra steps)

[27/04/2020](apr/27-04)

- review from last week's lessons 
- review from last week's assingment [23/04/2020](apr/23-04)
- Comparing `Node.previousSibling` and `Element.previousElementSibling`
- `ParentNode.children`
- [Human readable elements](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText)
- [NodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
- [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
)
- `Element.closest(<selector string>)`
- `Element.matches(<selector string>)`

[28/04/2020](apr/28-04)

- review from yesterday
- `EventTarget.addEventListener(<namespace>, <callback>)`
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Keyboard Events: `keydown`, `keyup`

- Project: [Build more features for the simple game](apr/28-04/simple-game)

[29/04/2020](apr/29-04)

- review from this week's lessons.
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- `EventTarget.removeEventListener(<namespace>, <function reference>)`
- Getting the target of the event: `Event.target`
- `Event.preventDefault()`
- [weekend-countdown](apr/29-04/weekend-countdown)

- Project: Simple calculator 

[30/04/2020](apr/30-04)

- Review from previous lessons.
- `Event.target`
- Event bubbling concept
- Common problems with bubbling: `Event.stopPropagation()` as solution
- Delegating events from parent to child

- Project: Browser-DynamicPills (movie app)

[04/05/2020](may/04-05)

- Review from last week lessons
- `<script type=""""module"""" src=""""..."""">`
- Connecting files: The `import` and `export` keywords""
""Imports and Exports:
- `export {<var1>, <var2> [, ...]}`
- Converting objects to JSON: `JSON.stringify(<object>)`
- Parsing JSON objects: `JSON.parse(<JSON string>)`

- Project: using JSON in the movie app from last week

[05/05/2020](may/05-05)

- Non-Blocking Promises:
- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Promises: 
  `new Promise(<function>)`, `Promise.resolve()`, `Promise.then()`
- Promisifying: Converting `setTimeout()` to a promise
- Breaking Promises: `Promise.reject()`, `Promise.catch()`

- Project: Promise

[06/05/2020](may/06-05)

- Getting info: `window.fetch(<url>)`, the response object overview
- Parsing JSON: `response.json()`
- Using data: `fetch(<url>).then(<callback>)` vs. `await fetch(<url>)`
- Sending data with Fetch: `fetch(<url>, <options>)`, the `method` option
- `https://jsonplaceholder.typicode.com/`

- Project: continue Promise

[07/05/2020](may/07-05)

- Review of this week's lessons
- Problems with promises: scoping issues, endless chain
- `async` functions, `await` keyword   
- `try {...} catch(e) {...}`

- Project: continue Browser-fetch-promises 

11/05/2020 Day 1 - Group project with SASS, UX/UI.

12/05/2020 Day 2 - Group project with SASS, UX/UI.

13/05/2020 Day 3 - Group project with SASS, UX/UI.

14/05/2020 Day 4 - Group project with SASS, UX/UI.

18/05/2020 Day 5 - Project presentations (Rosetta, Blackjack, Tarot reading, Tarot game, Online shop)

[19/05/2020](may/19-05)

API review
- Parsing JSON: `response.json()`
- Using data: `fetch(<url>).then(<callback>)` vs. `await fetch(<url>)`""

[20/05/2020](may/20-05)

Callback review

- let's make hot chocolate app
- Project: refactor chocolate app to async await or promises
