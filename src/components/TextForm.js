import React,{useState } from 'react'


// import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick = ()=>{
      console.log("Upper case is clicked" + text);
      let newText= text.toUpperCase();
      setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Lower case is clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
  }
  const handleInverseClick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  }
    const handleClearClick = ()=>{
      console.log("clear is clicked" + text);
      let newText= " ";
      setText(newText)
}
  const handleOnChange = (event)=>{
      console.log("Onchange");
      setText(event.target.value);
  }
  const [text, setText] = useState("");//yeh abhi khali choda hai
return (
  <>
  <div className="container">
    <h1>{props.heading}</h1> 
<div className="mb-3">
<textarea className="form-control" value= {text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to Upper</button>
<button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to Lower</button>
<button className='btn btn-primary mx-2'onClick={handleClearClick}>Clear text</button>
<button className='btn btn-primary mx-2'onClick={handleInverseClick}>inverse text</button>
  
  </div>
  <div className="container my-3">
    <h1>Your text Summary:</h1>
    <p> {text.split(" ").length} words and  {text.length} characters</p>
    <p> {0.008*text.split(" ").length} Minutes to read</p>
    <h3> preview</h3>
    <p>{text}</p>
  </div>
  </>
)
}
// TextForm.propTypes = {Text:PropTypes.string}