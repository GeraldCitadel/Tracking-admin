import { createContext, useState } from 'react'
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [tracking, setTracking] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }


    const fetchTrackingData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/getTracking')

            if (data) {
                setTracking(data)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    const value = {
        calculateAge,
        token,
        setToken,
        fetchTrackingData,
        tracking,
        backendUrl,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider