import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

function Banner() {
  return (
  <section className='section' id='home'>
    <div className="container mx-auto">
      <div>

        <div>
          <div>
            <h1 className='font-secondary text-[36px] uppercase'>Enes <span>Ulusal</span></h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
             
             <TypeAnimation sequence={[
              '360° Çekim',2000,
              'Fotoğraf',2000,
             ]}
             speed={50}
             className='text-white'
             wrapper='span'
             repeat={Infinity}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Banner;