import React from 'react'
import Logo from '../assets/360.png'

function Header() {
  return (
    <div className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={Logo} alt="" height={80} width={80} />
          </a>
          <button className='btn btn-sm'>Benimle Çalış</button>
        </div>
      </div>
    </div>
  )
}
export default Header;