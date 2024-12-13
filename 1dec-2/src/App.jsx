import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-blue-600 text-white ">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          
          <div className="text-xl font-bold">
            <a href="#">MyLogo</a>
          </div>

          
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>

            
            <div className="md:hidden">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        </div>
      </main>

      
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with <span className="text-red-500">&hearts;</span> by YourName
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
