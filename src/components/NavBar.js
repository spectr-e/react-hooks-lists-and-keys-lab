import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      <a href={"#"+ links[0]} key={"#"+ links[0]}>{links[0]}</a>
      <a href={"#"+ links[1]} key={"#"+ links[1]}>{links[1]}</a>
      <a href={"#"+ links[2]} key={"#"+ links[2]}>{links[2]}</a>
    </nav>
  )
}

export default NavBar;
