import { Link, usePage } from "@inertiajs/inertia-react";

function Nav({auth}) {
  // console.log(props)
  let {component} = usePage()
  console.log(component)
    let menu = document.getElementById('menu');
    const menuToggle = ()=>{
        // console.log('clicked',menu)
        menu.classList.toggle('hidden')
    }
  return (
    <nav className="sticky fixed flex relative flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-800">
            SMAYA
          </a>
        </div>
        {/* Navigation links */}
        <div className="flex  items-center">
          <div className="hidden   md:flex md:items-center" >
          <div className=" space-x-6 font-bold flex  flex-col md:flex-row ">
          <Link
              href="/"
              className={`block mx-4 text-gray-800 hover:text-gray-600 ${component == "Welcome" && "text-red-400"}`}
            >
              Home
            </Link>
            
            {auth.id ?
            <div className="flex">

            <Link
            href="/employee/dashboard"
            className={`block mx-4 text-gray-800 hover:text-gray-600 ${component == "Employee/Dashboard" && "text-red-400"}`}
            >
            Dashboard
          </Link>
          <Link
            href="/employee/unconfirmedRequests"
            className={`block mx-4 text-gray-800 hover:text-gray-600 ${component == "Employee/UnconfirmedReqs" && "text-red-400"}`}
            >
            Uncofirmed Requests
          </Link>
          {auth.role=="admin" &&
            <Link
            href="/admin/employees"
            className={`block mx-4 text-gray-800 hover:text-gray-600 ${component == "Admin/Employees" && "text-red-400"}`}
          >
            Employees
          </Link>
          }
            </div>
            
            
            :
            <div className="flex">
             <Link
              href="/services"
              className={`block mx-4 text-gray-800 hover:text-gray-600 ${component == "Services" && "text-red-400"}`}
            >
              Services
            </Link>
              <a
                href="#about"
                className="block mx-4 text-gray-800 hover:text-gray-600"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block mx-4 text-gray-800 hover:text-gray-600"
              >
                Contact Us
              </a>
            </div>}
              
          </div>
          {/* Login/logout button */}
          {auth.id ? <Link href="/logout" method="post" className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full mx-4">
            Logout
          </Link>:
          <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4">
            Login
          </Link>}
          </div>
          {/* Hamburger menu */}
          <div className="md:hidden">
            <button type="button" onClick={menuToggle} className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                ></path>
              </svg>
            </button>
          </div>
          {/* Hamburger actual menu  */}
          <div className="hidden md:hidden" id="menu">

          <div className="absolute  flex flex-col items-center 
          self-end  py-8 mt-10 space-y-6 font-bold
           bg-white sm:w-50 sm:self-center left-6 right-6 
            drop-shadow-md">
              <a
              href="#services"
              className="block mx-4 text-gray-800 hover:text-gray-600"
            >
              Home
            </a>
              <a
              href="#services"
              className="block mx-4 text-gray-800 hover:text-gray-600"
            >
              Services
            </a>
            <a
              href="#about"
              className="block mx-4 text-gray-800 hover:text-gray-600"
              >
              About Us
            </a>
            <a
              href="#contact"
              className="block mx-4 text-gray-800 hover:text-gray-600"
            >
              Contact Us
            </a>
          
          {/* Login button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4">
            Login
          </button>
          </div>
          </div>
        </div>

    </nav> 
  )
}

export default Nav