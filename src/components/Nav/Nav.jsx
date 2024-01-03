import React from 'react';
import logo from "../../assets/logo.png"

const Nav = () => {
  return (
    <div className='flex-between w-full mb-16  pt-3 sm:pt-6 glassmorphism_nav'>
        <div href="/" className="flex gap-1 justify-left items-center">
        <img
          src={logo}
          alt="Quick Todo Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <p className=" font-manjari font-extrabold"> Quick Todo</p>
      </div>
    </div>
  )
}

export default Nav