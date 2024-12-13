import React from 'react'

const App = () => {
  return (
    <>
      <div className='h-screen text-slate-500 bg-gray-800 grid place-content-center '>
        <div className='max-w-sm mx-auto bg-pink-300 rounded-xl p-6 md:max-w-2xl'>
          <div className='md:flex md:h-full md:w-48 object-cover'>
            <div>
              <img className='h-48 w-full' src='https://images.pexels.com/photos/27798074/pexels-photo-27798074/free-photo-of-faroe-islands-6.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''></img>
            </div>
            <div className='p-3'>
              <div className='uppercase -tracking-wide text-sm font-semibold mb-5'>
                Hello How are you world!
              </div>
              <a className='block mt-1 hover:bg-slate-400 hover:text-black hover:rounded-lg' href='#'>Tailwind css we are working on right now</a>
              <p className='mt-2 text-violet-400'>hello kkt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
