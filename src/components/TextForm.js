import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
        
    }
    const handleClick=()=>{
        const newtxt=text.toUpperCase()
        setText(newtxt)
        props.showAlert("Covert to Upper Case", "success")
    }
    const handleLoClick=()=>{
        const newtxt=text.toLowerCase()
        setText(newtxt)
        props.showAlert("Covert to Lower Case", "success")

    }
    const handleCopy=()=>{
      var text=document.getElementById('myBox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied", "success")

    }

    const handleRemoveSpace=()=>{
      var nextText=text.split(/[ ]+/);
      setText(nextText.join(" "))
    }
  return (
<>


<div class="mb-3" style={{color:props.mode==="dark"?"white":"black"}}>
<h1>{props.heading}</h1>
  <textarea class="form-control" id="myBox" value={text} onChange={handleChange}  style={{backgroundColor:props.mode==="dark"? "grey":"white",color:props.mode==="dark"?"white":"black"}} rows="8"></textarea>
  <button disabled={text.length===0} onClick={handleClick}>Convert to upper case</button>
  <button disabled={text.length===0} onClick={handleLoClick}>Convert to lower case</button>
  <button disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} onClick={handleRemoveSpace}>Remove Space</button>


  <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>Your Character Summary</h1>
    <p>{text.split(" ").filter((ele)=>{return   ele.length!=0}).length} words {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes Read</p>
    <h5>Preview</h5>
    <p>{text}</p>
    <h2>Data</h2>
    <p>{text.length>0?text:"Enter the things"}</p>

  </div>
</div>
</>
  )
}

export default TextForm
