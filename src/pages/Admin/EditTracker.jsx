import React, { useContext, useEffect, useState } from 'react'
import Form from '../../components/Form'
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from "axios";

const EditTracker = () => {

    const [currentTracking, setCurrentTracking] = useState(false)
    const { backendUrl } = useContext(AppContext)
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(backendUrl + `/${id}`)
                if (data) {
                    setCurrentTracking(data)
                } 
            } catch (error) {
                toast.error(error.message)
            }
        }
        fetchData()
      }, [])


    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const formData = Object.fromEntries(data)
        const updatedData = {
            id: currentTracking.id,
            ...formData
        }

        try {
            const { data } = await axios.patch(backendUrl + `/tracking/${id}`, updatedData)

            if (data) {
                setCurrentTracking(data)
                toast.success('Tracking details updated successfully!')
                navigate('/dashboard')
            } 
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Form inputData={currentTracking} onSubmit={handleUpdate}>
                <button type='button' className='text-button'>Cancel</button>
                <button type='submit' className='button'>Update</button>
            </Form>
        </div>
    )
}

export default EditTracker