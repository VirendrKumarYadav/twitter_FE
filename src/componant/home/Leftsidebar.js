import React from 'react'
import { CiHome, CiLogout } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IoMdHome, IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import {CgProfile} from "react-icons/cg";
import { BsTwitterX } from 'react-icons/bs';
const leftsidebar = () => {
  return (
    <div className='leftsidebar-cont'>
      <div className='logo-cont'>
        {/* <img src='' alt='logo_img'></img> */}
        <BsTwitterX size="3rem"/>
      </div>
      <div className='tab-cont'>


        <div className='tab-link'>
          <span className='icons'>
          <IoMdHome size="24px" />
          </span>
          <h4>Home</h4>
        </div>
        <div className='tab-link'>
          <span className='icons'>
          <IoSearch size="24px" />
          </span>
          <h4>Explore</h4>
        </div>
        <div className='tab-link'>
          <span className='icons'>
          <IoMdNotificationsOutline  size="24px" />
          </span>
          <h4>Notifications</h4>
        </div>
        <div className='tab-link'>
          <span className='icons'>
          <CgProfile size="24px" />
          </span>
          <h4>Profile</h4>
        </div>
        <div className='tab-link'>
          <span className='icons'>
          <CiBookmark size="24px" />
          </span>
          <h4>Bookmarks</h4>
        </div>
        <div className='tab-link'>
          <span className='icons'>
          <CiLogout size="24px" />
          </span>
          <h4>Logout</h4>
        </div>
        <div className='btn-container'><button className='btn apple-btn post-btn'> Post </button></div>
      </div>
    </div>
  )
}

export default leftsidebar