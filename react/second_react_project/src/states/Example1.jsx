import { useState } from "react";

function Example1(){
      let [name,setName]= useState('Shaik');
      let change=()=>{
       setName("Azeez")
    }
    return(
        <>
        <h1>{name}</h1>
        <button onClick={change}>Click to change name</button>
        </>
    )
}
export default Example1;