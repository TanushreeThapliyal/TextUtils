import React,{useState} from 'react';

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Uppercase button was clicked")
        let newText=text.toUpperCase();
        setText(newText)
      props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=>{
        console.log("Lowercase button was clicked")
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick=()=>{
        console.log("CLeartext button was clicked")
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange=(event)=>{
        console.log("On change")
        setText(event.target.value)

    }

    const handleExtraSpaces=(event)=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces managed","success");
    }


    const[text,setText]=useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"} }>
    <h1> {props.heading}   </h1>
    <div className="form-floating">
  <textarea className="form-control h-25" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#13466e":"white", color:props.mode==="dark"?"white":"black" }} id="floatingTextarea" rows="5" > </textarea>

  </div>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to Uppercase</button> 
  <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to Lowercase </button> 
  <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear Text </button> 
  <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button> 

</div>


<div className="container my-3"style={{color:props.mode==="dark"?"white":"black"} } >
<h2> Your Text Summary</h2>
<p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>


<h2> Preview</h2>
<p> {text}</p>
</div>

</>
  );
}
