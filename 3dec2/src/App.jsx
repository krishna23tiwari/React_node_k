import React from 'react'
import { viteLogo } from '/vite.svg';

const App = () => {
  return (
    <>
      <div className='h-screen bg-slate-500 grid place-content-center'>
          <h1 className='text-white text-2xl'>Hello World!</h1>
          <div className='mb-5'>
            <div className='p-6 mx-auto bg-white rounded-2xl max-w-64 shadow-lg flex items-start space-x-4'>
              <div>
                <img className='h-12 w-15' src='https://i.pinimg.com/736x/d3/ca/44/d3ca44ad81a24fcbe71b4e2d78e8d41b.jpg' alt=''></img>
              </div>

              <div>
                <div className='text-[15px] font-medium text-black'>
                  Tailwind Css
                  <p className='text-slate-700 text-pretty font-serif'>
                    Hello myself krishan kant tiwari.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className='bg-sky-800 h-[40px] text-center pt-2 w-[100px] mx-auto hover:bg-slate-600 hover:text-orange-300 rounded-xl'>
            <button className=''>Buy now</button>
          </div>

        


      </div>
    </>
  )
}

export default App
