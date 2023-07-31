import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked")
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    
    const handleAltClick = () =>{       
        setText(text.split("").map(item => item === item.toUpperCase()? item.toLowerCase(): item.toUpperCase()).join(''))
        props.showAlert("Converted to Alternative Case!","success")
    }

    const [text, setText] = useState("Enter text here")
    // text="Change Text"  wrong way to change state
    // setText("new text");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>

            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleAltClick}>Convert to AlternatingCase</button>
        </div>

        <div className="classname my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.trim().length>0?text.trim().split(/\s+/).length:0} words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above"}</p>
        </div>
        </>
    )
}
