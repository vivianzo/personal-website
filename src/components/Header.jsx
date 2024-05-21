import React from 'react'
import PostIt from './reusable/PostIt'
import AnimatedText from './reusable/AnimatedText';
import { motion } from 'framer-motion';

const Header = () => {
  return (

    <div className='relative w-full'>
        <div className='flex flex-col py-3 px-10'>
          <AnimatedText text="hello" style="text-8xl my-2"/>
          <h2 className="max-w-sm">
          my name is vivian and I am a second year computer science and math student at northeastern university
          </h2>
        </div >
        <PostIt text="Note 1" style="absolute bottom-8 left-3/4 transform -translate-x-1/2" />
        
        <PostIt text="Note 3" style="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
    </div>
        

  )
}

export default Header
