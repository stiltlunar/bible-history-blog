import React from "react";



function Footer() {
  return (
    <footer>
      <p>&copy; {String(new Date().getFullYear())} BibleHistory.info</p>
    </footer>
  );
}

export default Footer;