import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
  return(
    <body>
      <title>BibleHistory | {pageTitle}</title>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </body>
  )
}

export default Layout;