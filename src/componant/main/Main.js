import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { GoogleLogin } from '@react-oauth/google';
import { BsApple } from 'react-icons/bs';
import Signup from '../modal/SignUp';
import Signin from "../modal/Signin"
const Main = () => {


  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className='main-container'>
      <div className='body-conainer'>
        <div className='left-container'>
          <BsTwitterX />
        </div>
        <div className='right-container'>
          <h1 className='main-header'>
            Happening now
          </h1>
          <div className='signup-container'>
            <h3 className='join-text'>Join today</h3>
            <GoogleLogin className="google-login" onSuccess={responseMessage} onError={errorMessage} />

            <div className='btn-container'><button className='btn apple-btn  '><BsApple></BsApple> Sign up wih Apple </button></div>
            <div className='saprater'><hr />or<hr /></div>

            <div className='btn-container'> <Signup/></div>
            {/* <button className='btn apple-btn btn-bg'>Create account </button> */}
          
            <p className='main-term'>By signing up, you agree to the <span className='service-link'> Terms of Service </span> and <span className='service-link'> Privacy Policy</span>, including <span className='service-link'>Cookie Use.</span></p>
            <div>
              <h6>Already have an account?</h6>
              <div className='btn-container'><Signin/></div>
            </div>
          </div>
        </div>
      </div>
     
      <div className='footer-container'></div>
    </div>
  )
}

export default Main