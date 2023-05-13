import React from 'react'
import {
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaFacebook,
  } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <>
    <div className="space-x-14 text-2xl text-[#002B5B] flex">
      <div className='ml-10'>
      <a href="https://www.youtube.com/@UbnJr" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <div>
        <a href="https://github.com/orgs/Ubn-Jr/dashboard" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/orgs/Ubn-Jr/dashboard" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/orgs/Ubn-Jr/dashboard" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/orgs/Ubn-Jr/dashboard" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  </>
  )
}
