import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import dateInput  from "../dateInput"

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
    return (
        <>
            <Button type="primary" className='btn' onClick={showModal}>
                Create account
            </Button>
            <Modal
                open={open}
                title="Sign Up"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <div className='sign-btn-container'>
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Create an account
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
                    <div className='label-container'>
                        <label>Name</label>
                        <input className='signup-input'></input>
                    </div>
                    <div className='label-container'>
                        <label>Phone</label>
                        <input className='signup-input'></input>
                    </div>
                    <div className='label-container'>
                        <label>Date Of Birth</label>
                        <input className='signup-input' type='date'></input>

                    </div>

                    <p className='param'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <div className='label-container'>
                        <label className='label-container'>Username</label>
                        <input className='signup-input'></input>
                    </div>

                </div>

            </Modal>
        </>
    );
};
export default App;