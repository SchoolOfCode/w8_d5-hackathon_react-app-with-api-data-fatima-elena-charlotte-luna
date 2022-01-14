import React, {useState, useEffect} from "react";

function Button(){

  const [toggle, setToggle] = useState(false)
  const [newFox, setFox] = useState("")

  useEffect(()=>{
    async function findFoxImage() {
    const promise = await fetch (`https://randomfox.ca/floof/`);
    const data = await promise.json();
    let imageFox = data.image;
    setFox(imageFox);
    
    //console.log(data)
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
<img src= {newFox} alt="Fox" />
  </>
  )
}

export default Button