import React from 'react'

function App() {
  return (
    <>
      <div className='bg-slate-500 py-4 pl-4 fixed w-full'>
        <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-semibold'>
          <a href='#'>Home</a>
        </div>
        <div className='hidden md:flex space-x-4 pr-4'>
          <a href="#home" className= "hover:bg-gray-400 px-3 py-2 rounded-md">Emails</a>
          <a href="#about" className=" hover:bg-gray-400 px-3 py-2 rounded-md">About</a>
          <a href="#services" className=" hover:bg-gray-400 px-3 py-2 rounded-md">Services</a>
          <a href="#contact" className=" hover:bg-gray-400 px-3 py-2 rounded-md">Contact</a>
        
        </div>
        </div>
      </div>
    </>  
  )
}

export default App


// import React, { useState } from 'react';

// function App() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="App">
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-white text-xl font-bold">
//             <a href="#">MyLogo</a>
//           </div>

//           {/* Menu for desktop */}
//           <div className="hidden md:flex space-x-4">
//             <a href="#home" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
//             <a href="#about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
//             <a href="#services" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Services</a>
//             <a href="#contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact</a>
//           </div>

//           {/* Mobile menu icon */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-blue-200 focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
//         >
//           <a href="#home" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
//           <a href="#about" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
//           <a href="#services" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Services</a>
//           <a href="#contact" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact</a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;
