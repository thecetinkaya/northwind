import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links text-2xl bg-slate-500 text-white  flex justify-center gap-5'>
        <Link to='/customerpage'>Customers</Link>
        <Link to='/addcustomer'>Add Customer</Link>
      </div>

    </nav>
  )
}

export default Navbar