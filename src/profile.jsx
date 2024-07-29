import React from "react";

function Profile({ name, age, bio }) {
  return (
    <div
      className="my-div"
      style={{
        margin: "10px",
        backgroundColor: "lightblue",
        color: "black",
        padding: "10px",
        textAlign: "center",
        boxShadow: "5px 5px 5px 0px grey",
      }}
    >
      <p>
        My name is {name}. I am {age} years old.{" "}
      </p>
      <p>I am a {bio}.</p>
    </div>
  );
}

export default Profile;
