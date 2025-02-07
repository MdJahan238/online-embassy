import React, { useContext } from 'react';
import logo from './../../../assets/image/logo-OnlineEmbassy.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {

    const { user,logOut }=useContext(AuthContext);
    //console.log(users,"from header");
    

    const menuItems =(<>
        <li> <NavLink to="/">Home</NavLink></li> 
        <li> <NavLink to="/about">About</NavLink></li> 
        <li> <NavLink to="/contact">Contact</NavLink></li> 
        <li> <NavLink to="/visa">Visa</NavLink></li>
        
        {
        user?.uid? (
        <>
        <li> <NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li> <button onClick={logOut}>Sign Out</button></li>
        </>
        ):(
           <li><NavLink to="/login">Login</NavLink></li> 
        )}
    </>
    
);
     
        /*
        { name:"Home",route:"/"},
        {name:"About",route:"/about"},
        { name:"Contact",route:"/contact"},
        {name:"Visa",route:"/visa"},
        {name:"Login",route:"/login"},
        */
   
    
    return (
        <div className='fixed left-0 right-0 top-0 bg-white z-50 '>
            <div className="navbar  justify-between shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                     {/*============= small device ===========*/}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                    </ul>
                    </div>
                    <NavLink to='/' className="">
                       <img className='h-20 w-20' src={logo} alt="" />
                    </NavLink>
                </div>

                {/* ========== large device ===========*/}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
                </div>
        </div>
    );
};

export default Header;