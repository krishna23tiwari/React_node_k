import React from 'react'
import Logo from "../../assets/logo.png";
import { Input } from 'postcss';

const Navbar = () => {
  return (
    <div>
        {/* upper navbar */}
        <div>
            <div>
                <div>
                    <a href='#'>
                        <img src={Logo} alt = "Logo" />
                    </a>
                </div>

                <div>
                    <div className='group'>
                        <input type = "text" placeholder='search' 
                        className='w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] transition-all 
                        duration-300 rounded-full  border-gray-300 px-2
                        py-1 focus:outline-none focus: border-1 
                        focus:border-orange-400'></input>
                    </div>
                </div>

            </div>
        </div>
        {/* lower navbar */}
        <div></div>
    </div>
  )
}

export default Navbar
