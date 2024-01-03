import React from 'react'

const Footer = () => {

    const currentDate = new Date();
    const Year = currentDate.getFullYear()
    return (
        <div className='flex justify-center w-full glassmorphism_footer'>
            <h5> copyright © {Year.toString()} Quick Todo | All rights reserved</h5>
        </div>
      )
}

export default Footer