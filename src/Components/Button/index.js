import React, {useState, useEffect} from "react";

function Button(){

  const [id, setId] = useState("")

  useEffect(()=>{
    async function findFoxImage() {
const promise = await fetch (`https://randomfox.ca//images//${id}.jpg`);
const data = await promise.json();
setId(data)
console.log(data)
//let image = document.createElement("img")
    }
    findFoxImage()
  }
  )

  function handleClick() {
    //set id to be a random number between 1 - 123
    const ranNum = Math.floor(Math.random() * 123 )
    console.log(ranNum);
    setId(ranNum)
  }

  return (
   <>
<button onClick = {handleClick}>{id}</button>
  </>
  )
}

export default Button