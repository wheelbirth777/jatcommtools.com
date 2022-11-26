import React, { useState } from "react";

function Test(props) {
  console.log(props);

  return (
    <>
      {props.todo.map((d) => {
        return (
          <>
            <h2>{d.name}</h2>
            <h2>{d.id}</h2>
          </>
        );
      })}
    </>
  );
}

export default Test;
