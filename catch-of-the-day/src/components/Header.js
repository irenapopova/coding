import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch
        <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
        Day</h1>
        <h3 className="tagline">
          <span>Fresh Seafood Market </span>

        </h3>
        <h2 className="tagline">
          <span>Inventory</span>
        </h2>

      </header >

    );
  }
}

export default Header;