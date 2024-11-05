import { useContext } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import classes from './Navbar.module.css'

const Navbar = () => {

   const { token, setToken } = useContext(AppContext)
  
   const navigate = useNavigate()

   const logout = () => {
      navigate('/login')
      token && setToken('')
      token && localStorage.removeItem('token')
      localStorage.removeItem('expiration')
   }

   return (
      <main className={classes.header}>
         <div className={classes.wrapper}>
            <img src={logo} alt="logo" />
            <p>Admin</p>
         </div>
         <button onClick={logout}>Logout</button>
      </main>
   )
}

export default Navbar