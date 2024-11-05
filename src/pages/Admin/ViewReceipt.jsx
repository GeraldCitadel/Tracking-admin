import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Modal from '../../UI/Modal';
import classes from './ViewReceipt.module.css'

const ViewReceipt = () => {
    const { backendUrl, dateFormat } = useContext(AppContext)
    const { id } = useParams()
    const [tracking, setTracking] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(backendUrl + `/${id}`)

                if (data) {
                    setTracking(data)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        fetchData()
    }, [])

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }

    const arrivalDate = new Date(tracking.arrival).toLocaleDateString('en-US', options);
    const departureDate = new Date(tracking.departure).toLocaleDateString('en-US', options);

    function handlePrint() {
        window.print()
    }

    return (
        <Modal onClose={() => navigate('../')}>

            <div className={classes.header}>
                <img src="" alt="" />
                <div>
                    <h3>Invoice</h3>
                    <p>GG-324481</p>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.details}>
                    <h2>
                        Invoiced To:
                    </h2>
                    <p>{tracking.receiverName}</p>
                    <h2>
                        Address:
                    </h2>
                    <p>{tracking.receiverAddress}</p>
                </div>
                <div className={classes.detail}>
                    <h2>Pay To:</h2>
                    <p>Citadel Global Courier</p>
                    <a href="mailto:support@citadelglobal.com">Support@citadelglobal.com</a>
                </div>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.details}>
                    <h2>Departure Date:</h2>
                    <p>{departureDate}</p>
                    <h2>Expected Date:</h2>
                    <p>{arrivalDate}</p>
                </div>
                <div className={classes.detail}>
                    <h2>Payment Method:</h2>
                    <p>{tracking.paymentMethod}</p>
                </div>
            </div>

            <div className={classes.invoice}>
                <div>
                    <h3>Invoice</h3>
                </div>
                <div className={classes["invoice-header"]}>
                    <h2>Description</h2>
                    <h2>Item</h2>
                    <h2>Amount</h2>
                </div>
                <div className={`${classes["invoice-details"]} ${classes.first}`}>
                    <h2></h2>
                    <p>Package/Luggage</p>
                    <h2></h2>
                </div>
                <div className={classes["invoice-details"]}>
                    <h2></h2>
                    <h2>Sub Total:</h2>
                    <h2>{tracking.amount}</h2>
                </div>
                <div className={classes["invoice-details"]}>
                    <h2></h2>
                    <h2>Total:</h2>
                    <h2>{tracking.amount}</h2>
                </div>
            </div>
            <p className={classes.disclaimer}><span>NOTE:</span>This is computer generated receipt and does not require physical signature</p>
            <div className={classes.actions}>
                <button onClick={handlePrint}>Print</button>
                <button onClick={handlePrint}>Download</button>
            </div>
            <Link to="/dashboard" className={classes.home}>Back to My Account</Link>
        </Modal>
    )
}

export default ViewReceipt