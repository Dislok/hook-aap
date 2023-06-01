import React from "react";

export const IncrementarBot = React.memo (({incremento}) => {
    console.log("me genere");
  return (
    <button
    className="btn btn-primary"
    onClick={() => {incremento(5)}}
    >
        Incrementar
    </button>
  )
})
