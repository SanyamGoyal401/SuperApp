import React from 'react'
import Input from './Input'
import './RightPane.css';
const RightPane = () => {
  return (
    <div className='container'>
        <div className='header green'>Super app</div>
        <br />
        <div className='create sans'>Create your new accout</div>
        <br />
        <div className='mail'>Email <span className='green sans'>|</span>Google</div>
        <br />
        <Input type = 'text' initial = 'Name'/>
        <Input type = 'text' initial = 'UserName'/>
        <Input type = 'email' initial = 'Email'/>
        <Input type = 'tel' initial = 'Mobile'/>
        <br />
        <div className='consent'>
            <input type='checkbox'/>
            Share my registration data with Superapp
        </div>
        <br />
        <button className='signup'>SIGN UP</button>
        <p>By clicking on Sign up. you agree to Superapp <span className='green'>Terms and Conditions of Use</span></p>
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head superapp <span className='green'>Privacy Policy</span></p>
    </div>
  )
}

export default RightPane