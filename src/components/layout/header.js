import React from "react";
import Nav from "./nav";

function Header() {
  return (
    <header>
      <h1 className="site-title">BibleHistory.info</h1>
      <Nav />
    </header>
  );
}

export default Header;