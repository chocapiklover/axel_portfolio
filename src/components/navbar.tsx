
const Navbar = () => {
    return <>
   <div className="navbar bg-transparent absolute top-0 w-full z-50">
  <div className="flex justify-between items-center w-10/12 mx-auto my-5">
    <div className="flex-1 mx-2">
      <a className="text-xl text-gray-200 tracking-[0.5em] font-extralight">AXEL</a>
    </div>

    <div className="flex-none hidden sm:inline-flex">
      <ul className="inline-flex mx-12 gap-12 font-thin text-gray-200">
        <li><a className="transition-all duration-300 ease-in-out hover:text-gray-400" href="#home">Home</a></li>
        <li><a className="transition-all duration-300 ease-in-out hover:text-gray-400" href="#about">About Me</a></li>
        <li><a className="transition-all duration-300 ease-in-out hover:text-gray-400" href="#services">Services</a></li>
        <li><a className="transition-all duration-300 ease-in-out hover:text-gray-400" href="#work">Work</a></li>
        <li><a className="transition-all duration-300 ease-in-out hover:text-gray-400" href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="flex-none block sm:hidden">
      <div className="dropdown relative">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dark:text-gray-200 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</>
}

export default Navbar