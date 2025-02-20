import React, { useContext } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { UserContext } from '../../Context/UserContext'




export default function Navbar() {

  let { UserLogin, setUserLogin } = useContext(UserContext)
  let navigate = useNavigate();
  function Logout() {
    localStorage.removeItem('userToken')
    setUserLogin(null)
    navigate('/login')
  }
  return (
    <>


      <nav className='bg-main-light fixed top-0 left-0 right-0 z-50 bg-slate-500'>
        <div className="container flex justify-between items-center mx-auto py-1">
          <div className='flex text-center'>
            <Link to={"/"} className='cursor-pointer'><img src={logo} width={110} alt="fresh cart logo" /></Link>


            <ul className='flex flex-col lg:flex-row justify-around items-center m-0 p-0 pl-10'>
              {UserLogin !== null ? <>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/"}>Home</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/about"}>About</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/cart"}>Cart</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/categories"}>Categories</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/brands"}>Brands</NavLink></li>
                <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/products"}>Products</NavLink></li>
              </> : null}
            </ul>
          </div>







          <ul className='flex flex-col md:flex-row justify-around m-0 p-0 pl-10'>
            {UserLogin === null ? <>
              <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/login"}>Login</NavLink></li>
              <li className='text-md mx-4 text-slate-900 font-normal'><NavLink to={"/register"}>Register</NavLink></li>
            </> : <li onClick={Logout} className='text-md mx-4 text-slate-900 font-normal cursor-pointer'><span to={"/"}>Logout</span></li>
            }

            <li className='text-md mx-4 text-slate-900 font-normal flex items-between items-center'>
              <i className='fab fa-facebook mx-2 fa-sm'></i>
              <i className='fab fa-instagram mx-2 fa-sm'></i>
              <i className='fab fa-twitter mx-2 fa-sm'></i>
              <i className='fab fa-tiktok mx-2 fa-sm'></i>
              <i className='fab fa-youtube mx-2 fa-sm'></i>
            </li>
          </ul>



        </div>


      </nav>



    </>
  )
}
