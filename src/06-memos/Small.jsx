import React from "react";
export const Small = React.memo(({value}) => {
    console.log("me dibuje");
  return (
    <small>{ value }</small>
  )
})
