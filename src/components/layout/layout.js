import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
  return(
    <div>
      <Header />
      <title>{pageTitle}</title>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;