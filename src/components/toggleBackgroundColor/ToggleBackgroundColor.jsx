import { useState } from "react"
import './styles.css';


const ToggleBackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');
    const [buttonStyle, setButtonStyle] = useState('white');

    const handleToggle = () => {

        setBackgroundColor(backgroundColor === 'white' ? 'black' : 'white');
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
        setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white');

    }

    return (
        <div style={{ backgroundColor: backgroundColor, color: textColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <button onClick={handleToggle} style={{ buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>{buttonStyle == "#1b1b1b" ? "Black Theme" : "White Theme"} </button>

            <section>
                <h1 style={{ color: textColor }}>Toggle Background Color</h1>
                <p style={{ color: textColor }}>Click the button to toggle between black and white background colors.</p>
            </section>
        </div>
    )
}

export default ToggleBackgroundColor
