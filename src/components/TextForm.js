import React, { useState } from 'react'

// #001A63 for nav bar

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length !== 0)
            props.showAlert("converted to uppercase", "success");
        if (newText === text && text.length > 0)
            props.showAlert("Already in uppercase", "info");
        if (text.length === 0)
            props.showAlert("Enter some text", "danger");
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length !== 0)
            props.showAlert("converted to lowercase", "success");
        if (newText === text && text.length > 0)
            props.showAlert("Already in lowercase", "info");
        if (text.length === 0)
            props.showAlert("Enter some text", "danger");
    }

    const handleCapclick = () => {
        let newText = text.toLowerCase();
        newText = newText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);
        if (text.length !== 0)
            props.showAlert("first letter of every word is capitalizeds", "success");
        if (newText === text && text.length > 0)
            props.showAlert("Already in capitalized", "info");
        if (text.length === 0)
            props.showAlert("Enter some text", "danger");
    }

    const handleClearclick = () => {
        let newText = '';
        setText(newText);
    }

    // const ChangeStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: '#1f3350',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#1f3350'
    //         })
    //         setBtnText("Enable light mode")
    //     }
    // }

    // const [myStyle, setMyStyle] = useState({
    //     color: '#1f3350',
    //     backgroundColor: 'white'
    // })

    // const [BtnText, setBtnText] = useState("Enable dark mode")

    const [text, setText] = useState('');
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'black' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'black' : 'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1f3350' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick} style={{ backgroundColor: props.mode === 'light' ? '' : '#001A63' }} >Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick} style={{ backgroundColor: props.mode === 'light' ? '' : '#001A63' }} >Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCapclick} style={{ backgroundColor: props.mode === 'light' ? '' : '#001A63' }} >Capitalize first letters</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearclick} style={{ backgroundColor: props.mode === 'light' ? '' : '#001A63' }} >Clear</button>
                {/* <button className="btn btn-primary mx-2 my-2" onClick={ChangeStyle}>{BtnText}</button> */}
            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'black' : 'light'}`}       >
                <h2>Test Summery</h2>
                <p>{(text[text.length - 1] === ' ' || text.length === 0) ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter something to preview here" : text}</p>
            </div>
        </>
    )
}
