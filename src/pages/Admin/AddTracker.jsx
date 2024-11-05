import React from 'react'
import Form from '../../components/Form'
import axios from 'axios'
import {  toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';

const AddTracker = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)
        const formData = Object.fromEntries(data)
        console.log(formData)

        try {
            const { data } = await axios.post('http://localhost:4000/addTracking', formData)
            
            if (data.success) {
               toast.success(data.message)
               navigate('/dashboard')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <button type='button' className='text-button'>Cancel</button>
                <button type='submit' className='button'>Create</button>
            </Form>
        </div>
    )
}

export default AddTracker