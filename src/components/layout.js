import React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return(
    <div>
      <header></header>
      <title>{pageTitle}</title>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout;