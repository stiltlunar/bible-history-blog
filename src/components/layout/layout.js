import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
  return(
    <main>
      <title>BibleHistory | {pageTitle}</title>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </main>
  )
}

export default Layout;