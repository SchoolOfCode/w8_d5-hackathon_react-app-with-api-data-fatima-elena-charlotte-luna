import React, {useState, useEffect} from "react";

function Button(){

  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    async function findFoxImage() {
    const promise = await fetch (`https://randomfox.ca/floof/`);
    const data = await promise.json();
    
    console.log(data)
    //let image = document.createElement("img")
    }
    findFoxImage()
  }, [toggle]
  );

  function handleClick() {
    if(toggle === false){
      setToggle(true)
    } else if(toggle === true){
      setToggle(false)
    }
    console.log('working')
  }
  
  // function handleClick() {
  //   // //set id to be a random number between 1 - 123

  //   // const ranNum = Math.ceil(Math.random(0-1) * 123 )
  //   // console.log(ranNum);
  //   // setId(ranNum)
  // } {toggle? 'Foxie' : 'Foxie'}

  return (
   <>
<button onClick = {handleClick}>Click</button>
  </>
  )
}

export default Button