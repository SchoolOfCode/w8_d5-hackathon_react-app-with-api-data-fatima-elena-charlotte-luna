import React from "react";

function Button(){

  function handleClick() {
    //set id to be a random number between 1 - 123
    const ranNum = Math.floor(Math.random() * 123 )
    console.log(ranNum);
  }

  return (
   <>
<button onClick = {handleClick}>Click</button>
  </>
  )
}

export default Button