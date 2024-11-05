import { useContext, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import {FaTrash, FaPen, FaPenAlt, FaPencilAlt} from 'react-icons/fa'

import classes from "./Dashboard.module.css";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";


const Dashboard = () => {
    const navigate = useNavigate()


    const { backendUrl, tracking, fetchTrackingData } = useContext(AppContext)


    useEffect(() => {
        fetchTrackingData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(backendUrl + `/delete/${id}`)
            if (data.success) {
                toast.success(data.message)
                fetchTrackingData()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }


    }


    return tracking && (
        <div className={classes.wrapper}>
            <h4>Dashboard</h4>
            <div className={classes.main}>
                <div className={classes.header}>
                    <p>#</p>
                    <p>Sender</p>
                    <p>Receiver</p>
                    <p>Tracking No.</p>
                    <p>Fee</p>
                    <p>Actions</p>
                    <p>Receipt</p>
                </div>

                {tracking.reverse().map((item, index) => (
                    <div className={classes.details} key={index}>
                        <p className={classes.index}>{index + 1}</p>
                        <p>{item.senderName}</p>
                        <p>{item.receiverName}</p>
                        <p>{item.trackingNumber}</p>
                        <p>{item.fee}</p>
                        <div className={classes.actions}>
                            <FaPen className={classes.edit} onClick={() => navigate(`/${item.id}/edit`)} />
                            <FaTrash className={classes.cancel} onClick={() => handleDelete(item.id)} />
                        </div>
                        <p className={classes.receipt} onClick={() => navigate(`/${item.id}/view-receipt`)}>View</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
