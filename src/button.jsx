import React from "react";

function Button({ label }) {
  return (
    <div
      className="btn"
      style={{
        backgroundColor: "blue",
        margin: "10px",
        color: "white",
        padding: "10px",
        textAlign: "center",
        boxShadow: "5px 5px 5px 0px grey",
      }}
    >
      <button>{label}</button>
    </div>
  );
}

export default Button;
