import React from "react";

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