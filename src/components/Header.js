import React from 'react'
import Logo from '../assets/360.png'
import { Link } from "react-scroll";

function Header() {
  return (
    <div className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
            <img src={Logo} alt="" height={80} width={80} />
          <Link to='contact'
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          ><button className='btn btn-sm'>Benimle Çalış</button></Link>
        </div>
      </div>
    </div>
  )
}
export default Header;