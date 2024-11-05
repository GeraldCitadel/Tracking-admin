import React, { useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

import classes from './Sidebar.module.css'

const Sidebar = () => {

const navigate = useNavigate()

const logout = () => {
    navigate('/login')
    token && setToken('')
    token && localStorage.removeItem('token')
 }

   return (
      <div className={classes.header}>
         <ul>
               <NavLink className={({ isActive }) => `${classes.nav} ${isActive ? classes.active : ''}`} to='/' onClick={scrollTo(0,0)} end>
                  <AiOutlineHome />
                  <p>Admin</p>
               </NavLink>
               <NavLink className={({ isActive }) => `${classes.nav} ${isActive ? classes.active : ''}`} to='/dashboard'>
                  <FaRegCalendarAlt />
                  <p>Dashboard</p>
               </NavLink>
               <NavLink className={({ isActive }) => `${classes.nav} ${isActive ? classes.active : ''}`} to='/add-tracker'>
                  <IoPersonAdd />
                  <p>Add Tracker</p>
               </NavLink>
               {/* <NavLink className={({ isActive }) => `${classes.nav} ${isActive ? classes.active : ''}`} onClick={logout} >
                  <FaUserFriends />
                  <p>Logout</p>
               </NavLink> */}
            </ul>
      </div>
   )
}

export default Sidebar