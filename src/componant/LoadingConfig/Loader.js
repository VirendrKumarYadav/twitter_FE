import React from 'react'
import { Space, Spin } from "antd";
import { BsTwitterX } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Loader = () => {
  AOS.init();
  return (
    <div  className=' flex justify-center items-center w-screen h-screen flex-col transition duration-2000 ease-in-out'>
      <BsTwitterX  size="10rem" data-aos="fade-in"/>
      {/* <Space size="middle" className=' flex justify-center items-center w-screen h-screen flex-col'>
        <p>Loading... Please Wait...</p>
        <Spin size="large" />
      </Space> */}
    </div>
  );
}

export default Loader
