import React from "react";



function Footer() {
  const year = String(new Date().getFullYear());
  console.log(year);
  return (
    <footer>
      <p>&copy; {year} BibleHistory.info</p>
    </footer>
  );
}

export default Footer;