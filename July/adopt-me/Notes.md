npm install devDependences:
-npm init
-npm install -D prettier

- npm install -D eslint eslint-config-prettier
- - npm install -D parcel-bundler
- - npm install react
- - npm install react-dom ( install without -D, because it is a production dependency)
- npm i -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
- npm i -D eslint-plugin-react-hooks

prettier - only frmating code does not care about the code
eslint - care about what methods are using

### HOOKS 🚀 🤖 🐬 🐳

### all hooks begin with "use" : useState, useEffect, useCallback, etc.

```js
import React, { useState, useEffect, useContext } from "react";

const SearchParams = () => {
  // rules-of-hooks, react hook  useState is  called conditionally , and React HOOKS must be called in the exact same order in every component render,
  // if (something) {
  //  const [location, setLocation] = useState("Berlin, DE");
  // }
  // location is the current state of location, setLocation is an updater for that particular place of state; 🤓 🤔 every time that event happens, the first state is always the default,
  const [location, setLocation] = useState("Berlin, DE");
  // const [location, setLocation] = useState("Berlin, DE") - this is a HOOK (the whole line)
  // the string "Berlin,DE"is not changing because the first state is always the default, and after that it will be whatever it is at that point of time, 🤖 🚀 this is how we have stateful Logic with React,
  // setLocation can be substituted with updateLocation
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            // every time that event happens, e - is going to represent an event that happened in the input, and then I am gonna call setLocation with whatever is inside of thet particular event, or inside of that input; which is going to update the useState above, so then, when that re-render happens after that location is going to be whatever I have updated it to be. 🚀 🤖

            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;

// useState is like creating a Hook,

/**
 *! useState creates the hook
 * * when you get back a HOOK, you get back an array of two things, and the Fist
 * ? thing is always be the current state of it, and the Second thing is always going to be an updater function for that particular piece of statement. 🐳 🤖 🚀
 * ! the way how HOOKS work, basically they are keeping track of the order that I am creating hooks, so if I have another hook underneath, like [animal, setAnimal] = useState("dog"),
 * the way hooks are keeping track of each individual piece of state is they are keeping track of the order that you are calling these things in,
 */
```

#### How does react work in terms of re-rendering?

- every time that something is changing it runs the re-render function , it runs the searchParams function again

```js

import React, { useState, useEffect, useContext } from "react";
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("Berlin, DE");
  const [animal, setBreed] = useState("dog");
  const [breed, setAnimal] = useState("");
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
        <input id="location" value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)} />
        </label>

        <label htmlFor="breed">
          Breed
        <select
            id="breed"
            value=[breed]
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled = {!breed.length === 0}
        >

        <option>All</option>
          {breed.map(breeString => (
            <option key={breedString} value={breedString}>
              {breedString}
            </option>
          ))}
        </select>

        </label>
      <button >Submit</button>
      </form>

    </div >

  );

};
export default SearchParams;


//** what is a CUSTOM HOOK  ?*/
```

### How to handle a synchronous code inside of react?
