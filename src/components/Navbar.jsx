import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="flex justify-between items-center p-[10px] text-white bg-[#227B94]">
            <h1 className='font-sans text-[22px] font-bold tracking-[1px]'>React CRUD</h1>
            <div className="flex gap-[15px] font-sans tracking-[0.5px] ">
                <Link to="/">HOME</Link>
                <Link to="/add">CREATE USER</Link>
                <Link to="/users">SHOW USER</Link>
            </div>
      </nav>
    </>
  )
}

export default Navbar