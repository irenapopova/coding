### Siblings elements cannot be returned

they can be wrapped in a <React.Fragment> </React.Fragment> tag.

#### one way of wrapping:

```js
import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      {/** wrap a sibling element in a React.Fragment tag */ }
      < React.Fragment >
      <form className="store-selector"
     <h2>Please enter a store</h2>)
     </form >
     </ >
    )
  }
}

export default StorePicker;

```

#### second way of wrapping:

```js

import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      {/** wrap a sibling element in a React.Fragment tag */ }
      < Fragment >
      <p>Fish!</p>
      <form className="store-selector">
        <h2>Please enter a store</h2>)
     </form >
     </ Fragment >
    )
  }
}

export default StorePicker;
```
🛑 I cannot return both a comment and an element, If I want to have a comment have to put it 