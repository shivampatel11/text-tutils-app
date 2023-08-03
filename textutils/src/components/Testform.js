import react, { useState } from 'react';
import './textform.css';

export default function Test() {

    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }

    const handleloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)

    }

    const handleclearClick = (event) => {
        let newText = ('')
        setText(newText)


    }

    const handlecopy = (event) => {
        let copy = (document.getElementById('mybox'))
        copy.select();
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()

    }

    const handleSpaces = (event) => {
        let space = text.split(/ [ ] +/);
        setText(space.join(' '))

    }


    const handleonChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (

        <div className='formcontainer'>
            <h1> Enter Your Text </h1>
            <textarea className="textarea" value={text} onChange={handleonChange} id="mybox" rows="10"></textarea>
            <div>
                <button disabled={text.length === 0} className="btn" onClick={handleupClick}>   Convert to Uppercase  </button>
                <button disabled={text.length === 0} className="btn" onClick={handleloClick}>   Convert to Lowercase  </button>
                <button disabled={text.length === 0} className="btn" onClick={handleclearClick}> Clear Text  </button>
                <button disabled={text.length === 0} className="btn" onClick={handlecopy}> copy Text  </button>
                <button disabled={text.length === 0} className="btn" onClick={handleSpaces}> Remove extra Spaces  </button>
            </div>
            <div className='summary' >

                <h1> Your Text Summary </h1>
                <p> we have {text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
                <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minutes take to read a text </p>
                <h2> Preview</h2>
                <p> {text.length > 0 ? text : "Nothing to Preview"}</p>

            </div>
        </div>
    )
}