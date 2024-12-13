import React from 'react'

const App = () => {
  return (
   <>
    <div className='max-h-full bg-slate-700'>
      <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>
        <div className='text-2xl text-indigo-800 font-bold '>PW Skills</div>

        
          <ul className='md:flex hidden font-semibold'>
            <li className='mx-[10px] cursor-pointer'>Home</li>
            <li className='mx-[10px] cursor-pointer'>About Us</li>
            <li className='mx-[10px] cursor-pointer'>Contact</li>
          </ul>
          <div className='hidden md:block px-2 py-2 bg-indigo-500 text-white rounded-2xl cursor-pointer'>Login/SignUp</div>
          <div className='md:hiidden'>
            <a className='text-4xl' href='#'>&#8801;</a>
          </div>
      </nav>
      <header className='w-full h-auto'>
        <img className='w-full hidden md:block' src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg' alt='' srcSet=''></img>
        <img className='w-full md:hidden ' src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg' alt='' srcSet=''></img>
      </header>

      <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-5'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
          <p className='text-indigo-800 font-bold text-2xl md:text-3xl text-center'>"pure Hardwork, No Shortcuts!"</p>
          <div className='w-36 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <div>
          <div className='w-full flex flex-wrap justify-evenly gap-36'>
              <div className='w-46 flex flex-col items-center mb-12'>
                <img className = 'w-[70px] h-15'src='https://img.icons8.com/?size=96&id=81348&format=png' alt=''></img>
                <p className='text-3xl font-bold'>600+</p>
                <p className='text-2xl font-bold'>Diffrent Courses</p>
              </div>

              <div className='w-46 flex flex-col items-center mb-12'>
                <img className = 'w-[70px] h-15'src='https://img.icons8.com/?size=96&id=XKedzxVhRNPR&format=png' alt=''></img>
                <p className='text-3xl font-bold'>700,000+</p>
                <p className='text-2xl font-bold'>Students Enrolled</p>
              </div>

              <div className='w-46 flex flex-col items-center mb-12'>
                <img className =  ' w-[70px] h-15'src='https://img.icons8.com/?size=160&id=p9oeU2dsTpXX&format=png' alt=''></img>
                <p className='text-3xl font-bold'>10,000+</p>
                <p className='text-2xl font-bold'>Successful Transition</p>
              </div>
          </div>
        </div>

      </div>

        <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-5'>
          <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
            <p className='text-indigo-800 font-bold text-2xl md:text-3xl text-center'>"Our Products"</p>
              <div className='w-36 h-1 border-b-2 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
          </div>
      </div>

      <div>
          <div className='w-full h-auto flex flex-wrap justify-center gap-24'>
            <div className='w-48 flex flex-col items-center mb-10  hover:border-[1px] hover:rounded-xl hover:border-white cursor-pointer p-2'>
              <img src='https://img.icons8.com/?size=200&id=67411&format=png' alt=''></img>
              <p className='text-3xl font-bold text-white '>PW Skills lab</p>
              <p className='text-[15px] font-bold text-gray-500 text-center'>Supercharge your project development with our robust lab.</p>
              
            </div>
            <div className='w-48 flex flex-col items-center mb-10  hover:border-[1px] hover:rounded-xl hover:border-white cursor-pointer p-2'>
              <img src='https://img.icons8.com/?size=200&id=zEj141qHoHc8&format=png' alt=''></img>
              <p className='text-3xl font-bold text-white '>Job Portal</p>
              <p className='text-[15px] font-bold text-gray-500 text-center'>Use exceptional templates for a stand-out resume minus the sign-up process</p>
              
            </div>
            <div className='w-48 flex flex-col items-center mb-10  hover:border-[1px] hover:rounded-xl hover:border-white cursor-pointer p-2'>
              <img src='https://img.icons8.com/?size=160&id=29Ag2NhAjY4C&format=png' alt=''></img>
              <p className='text-3xl font-bold text-white '>Experience portal</p>
              <p className='text-[12px] sm:text-[15px] font-bold text-gray-500 text-center'>Pw skills self-paced experience portal priorities hands-on training with 570+ internship project.</p>
              
            </div>

            <div className='w-48 flex flex-col items-center mb-10  hover:border-[1px] hover:rounded-xl hover:border-white cursor-pointer p-2'>
              <img src='https://img.icons8.com/?size=160&id=OtL2AI_cG_Ps&format=png' alt=''></img>
              <p className='text-3xl font-bold text-white '>Hall of Fame</p>
              <p className='text-[12px] sm:text-[15px] font-bold text-gray-500 text-center'>Our students placements and 100k+ career transtions speak volumes about our cources.</p>
              
            </div> 
          </div>
      </div>

      <footer className='w-full bg-gray-900 px-4 text-white p-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
        <div>
          <img className='w-40 h-16' src='https://pwskills.com/images/PWSkills-white.png' alt=''></img>
          <p className='my-4'>Email us: krishna23tiwari.kt@gmail.com</p>
          <img className='w-32 h-32' src='https://img.icons8.com/?size=160&id=OtL2AI_cG_Ps&format=png ' alt=''></img>
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-300 rounded-2xl my-2'></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>Products</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-300 rounded-2xl my-2'></div>
          <div>
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall Of Fame</p>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>Links</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-300 rounded-2xl my-2'></div>
          <div>
            <p>Discord Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>

      </footer>

    </div>



   </>
  )
}

export default App
