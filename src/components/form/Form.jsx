import React, { useState } from 'react'

const Form = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUserName, setErrorUserName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userNameColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate = e => {
        e.preventDefault();

        if (userName.length > 8) {
            setUserColor('green');
            setErrorUserName('');
        } else {
            setUserColor('red');
            setErrorUserName('Username must be at least 8 characters long');
        }

        if (email.includes('@') && email.includes('.')) {
            setEmailColor('green');
            setErrorEmail('');
        } else {
            setEmailColor('red');
            setErrorEmail('Email must be valid');
        }
        if (password.length > 8) {
            setPasswordColor('green');
            setErrorPassword('');
        } else {
            setPasswordColor('red');
            setErrorPassword('Password must be at least 8 characters long');
        }
        if (confirmPassword.length > 8 && confirmPassword === password) {
            setConfirmPasswordColor('green');
            setErrorConfirmPassword('');
        } else {
            setConfirmPasswordColor('red');
            setErrorConfirmPassword('Password must be at least 8 characters long and match the password');
        }
    }



    return (
        <div className='card'>
            <div className="card-image"></div>

            <form >
                <input type='text' placeholder='Name' style={{ borderColor: userNameColor }} value={userName}
                    onChange={e => setUserName(e.target.value)} />
                    <p className='error'>{errorUserName}</p>
                <input type='text' placeholder='Email' style={{ borderColor: emailColor }} value={email}
                    onChange={e => setEmail(e.target.value)} />
                <p className='error'>{errorEmail}</p>
                <input type='text' placeholder='Password' style={{ borderColor: passwordColor }} value={password}
                    onChange={e => setPassword(e.target.value)} />
                <p className='error'>{errorPassword}</p>
                <input type='text' placeholder='ConfirmPassword' style={{ borderColor: confirmPasswordColor }} value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)} />
                <p className='error'>{errorConfirmPassword}</p>
                <button type='submit' onClick={validate}>Submit</button>



            </form>

        </div>
    )
}

export default Form
