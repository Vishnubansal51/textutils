import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log('uppercase was clicked ' + text);
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert("coveryted to upper case", "success");
  }
  const handleLoClick = ()=>{
    // console.log('uppercase was clicked ' + text);
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("coveryted to lower case", "success");
  }
  const handleOnChange = (event)=>{
    
    // console.log('on chage');
    setText(event.target.value);
  }
  const handleCopy= ()=>{
    console.log("i am copying");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text successfully copied", "success");
  }
  const removeExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("text sucessfully removed", "success");
  }
  const [text, setText] = useState("enter text here");
  
 
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'white': 'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1" onChange={handleOnChange}
          value={text}
          style={{backgroundColor: props.mode=== 'dark'?'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>  convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>  convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>  copy text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>  remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark'?'white': 'black'}}>
      <h1>text summary</h1>
      <p>{text.split(" ").length}words  and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes is the reading time</p>
      <h2>preview</h2>
      <p> { text.length>0 ? text:"enter something in the above box to preview it here"} </p>
    </div>

    </>
  );
}
