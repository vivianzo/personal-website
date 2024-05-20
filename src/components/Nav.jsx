import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between'> 
        <div className='flex bg-white rounded-full items-center px-4 text-4xl'>
            logo
        </div>
        <div className='m-5 flex items-center px-8 justify-center gap-9 text-xl'>
            <div>about</div>
            <div>fun</div>
            <div>resume</div>
        </div>
    </nav>
  )
}

export default Nav
