import React from "react";

function Header({ title }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        textAlign: "center",
        margin: "10px",
        boxShadow: "5px 5px 5px 0px grey",
      }}
    >
      {title}
    </div>
  );
}

export default Header;
