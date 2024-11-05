import { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import classes from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const { setToken, backendUrl } = useContext(AppContext)


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(backendUrl + '/login', { email, password })
            if (data.success) {
                localStorage.setItem('token', data.token)
                setToken(data.token)
                toast.success(data.message)

                const tokenExpiration = new Date();
                tokenExpiration.setHours(tokenExpiration.getHours() + 1)

                localStorage.setItem('expiration', tokenExpiration.toISOString())

                navigate('/dashboard')
            } else {
                toast.error(data.message)
            }

        } catch (error) {

        }
    }

    return (
        <form onSubmit={onSubmitHandler} className={classes.header}>
            <div className={classes.wrapper}>
                <p className={classes.title}><span>Admin </span>Login</p>
                <div className={classes.details}>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' id='email' required />
                </div>
                <div className={classes.details}>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}  type='password' id='password' required />
                </div>
                <button type='submit' className='button'>Login</button>
            </div>
        </form>
    )
}

export default Login