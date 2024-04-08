import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { GoogleLogin } from '@react-oauth/google';
import { BsApple } from 'react-icons/bs';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <Button type="primary" className='btn' onClick={showModal}>
        Sign in
      </Button>
      <Modal
        open={open}
        title="Sign In"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className='sign-btn-container'>
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Sign in
            </Button>,
            {/* <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>, */}
          </div>
        ]}
      >
        <div className='signup-conatiner'>
          <GoogleLogin className="google-login" onSuccess={responseMessage} onError={errorMessage} />
          <div className='btn-container'><button className='btn apple-btn sign-in-apple'><BsApple></BsApple> Sign up wih Apple </button></div>
          <div className='saprater'><hr />or<hr /></div>

          <div className='label-container'>
            <input className='signup-input' placeholder='Phone,email, or username'></input>
          </div>
          <div className='label-container'>
            <input className='signup-input' placeholder='Password'></input>
          </div>


          <p className='param'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <div className='label-container'>

          </div>

        </div>

      </Modal>
    </>
  );
};
export default App;