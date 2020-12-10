👉 `Header.js`

```js
import React from "react";
// if we have only one argument, it does NOT need the parentheses, if we have two arguments, I can distructure the props int their own variables,
const Header = ({ tagline, age }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      //here I don't need the {props} just {tagline}
      <span>
        {tagline} {age}{" "}
      </span>
    </h3>
  </header>
);
```
