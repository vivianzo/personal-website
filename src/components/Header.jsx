import React from 'react'
import PostIt from './PostIt'

const Header = () => {
  return (

    <div className='relative'>
        <div className='flex flex-col'>
            <h1 className="text-8xl my-2">
            hello
            </h1>
            <h2 className="max-w-sm">
            my name is vivian and I am a second year computer science and math student at northeastern university
            </h2>
        </div>
        <PostIt text="Note 1" style="absolute bottom-8 left-3/4 transform -translate-x-1/2" />
        <PostIt text="Note 2" style="absolute bottom-8 left-1/4 transform -translate-x-1/2 " />
        <PostIt text="Note 3" style="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
    </div>
        

  )
}

export default Header
