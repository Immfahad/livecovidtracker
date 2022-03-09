import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase","success");
    }
    const handleLoClick=()=>{
      console.log("uppercase was clicked"+text)
      let newText=text.toLowerCase();
      setText(newText)
  }
  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}
    const handleonChange=(event)=>{
        console.log("Onchange")
        setText(event.target.value)
    }


    const [text, setText] = useState("");
  return (
    <>

    
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    
        <div className="mb-3">
        
        <textarea className="form-control" value= {text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={capitalFirstLetter} >Convert into Title case</button>
       
      
    </div>
    <div classname="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>

    </>
    
  )
}
