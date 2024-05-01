import React from 'react'
import logo from '../assets/logo-todo.png'
const Header = () => {
    return (
        <div className='flex items-center justify-center gap-3 my-6'>
            <img
                className='w-[50px] sm:w-[80px]'
                src={logo}
                alt="logo" />
            <h1 className='text-white text-3xl sm:text-6xl'>Todo List App</h1>
        </div>
    )
}

export default Header
