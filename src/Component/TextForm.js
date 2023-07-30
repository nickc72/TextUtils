import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked")
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")
    // text="Change Text"  wrong way to change state
    // setText("new text");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="classname my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
