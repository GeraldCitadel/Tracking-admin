import Input from "./Input";
import classes from './Form.module.css'

const Form = ({ onSubmit, inputData, children}) => {
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <h1>Tracking Information</h1>
            <div className={classes.wrapper}>
                <div>
                <Input
                        label="NAME OF TRACKER"
                        id="trackerName"
                        name="trackerName"
                        type='text'
                        placeholder="NAME OF TRACKER"
                        defaultValue={inputData?.trackerName}
                        required
                    />
                     <Input
                        label="CURRENT LOCATION"
                        id="location"
                        name="location"
                        type='text'
                        placeholder="CURRENT LOCATION"
                        defaultValue={inputData?.location}
                        required
                    />
                </div>
            <div className={classes.header}>
                <div className={classes.details}>
                    <h2>SENDER DETAILS</h2>
                    <Input
                        label="Sender's Name"
                        id="senderName"
                        name="senderName"
                        type='text'
                        placeholder="Sender's Name"
                        defaultValue={inputData?.senderName}
                        required
                    />
                    <Input
                        label="Sender's Number"
                        id="senderNumber"
                        name="senderNumber"
                        type='text'
                        placeholder="Sender's Number"
                        defaultValue={inputData?.senderNumber}
                    />
                    <Input
                        label="Sender's Email"
                        id="senderEmail"
                        name="senderEmail"
                        type='email'
                        placeholder="Sender's Email"
                        defaultValue={inputData?.senderEmail}
                    />
                    <Input
                        label="Sender's Address"
                        id="senderAddress"
                        name="senderAddress"
                        type='text'
                        placeholder="Sender's Address"
                        defaultValue={inputData?.senderAddress}
                        required
                    />
                </div>
                <div className={classes.details}>
                    <h2>RECEIVER DETAILS</h2>
                    <Input
                        label="Receiver's Name"
                        id="receiverName"
                        name="receiverName"
                        type='text'
                        placeholder="Receiver's Name"
                        defaultValue={inputData?.receiverName}
                        required
                    />
                    <Input
                        label="Receiver's Number"
                        id="receiverNumber"
                        name="receiverNumber"
                        type='text'
                        placeholder="Receiver's Number"
                        defaultValue={inputData?.receiverNumber}
                    />
                    <Input
                        label="Receiver's Email"
                        id="receiverEmail"
                        name="SenderEmail"
                        type='email'
                        placeholder="Receiver's Email"
                        defaultValue={inputData?.receiverEmail}
                    />
                    <Input
                        label="Receiver's Address"
                        id="receiverAddress"
                        name="receiverAddress"
                        type='text'
                        placeholder="Receiver's Address"
                        defaultValue={inputData?.receiverAddress}
                        required
                    />
                </div>
            </div>
            <div>
                <h2>SHIPMENT INFORMATION</h2>
                <div className={classes.header}>
                    <div className={classes.details}>
                        <Input
                            label="Origin"
                            id="origin"
                            name="origin"
                            type='text'
                            placeholder="Origin"
                            defaultValue={inputData?.origin}
                            required
                        />
                        <Input
                            label="Destination"
                            id="destination"
                            name="destination"
                            type='text'
                            placeholder="Destination"
                            defaultValue={inputData?.destination}
                            required
                        />
                        <Input
                            label="Transit Status (Delivered, Held, En Route"
                            id="status"
                            name="status"
                            type='text'
                            placeholder="Transit Status (Delivered, Held, En Route"
                            defaultValue={inputData?.status}
                            required
                        />
                        <Input
                            label="Tacking Number"
                            id="trackingNumber"
                            name="trackingNumber"
                            type='text'
                            placeholder="Tacking Number"
                            defaultValue={inputData?.trackingNumber}
                            required
                        />
                        <div className={classes.select}>
                            <label htmlFor="delivery">Delivery Mode</label>
                            <select name="delivery" id="delivery"  value={inputData?.delivery}>
                                <option value="">Select an option</option>
                                <option value="Air">Air</option>
                                <option value="Sea">Sea</option>
                                <option value="Road">Road</option>
                            </select>
                        </div>
                        <Input
                            label="Product Name"
                            id="productName"
                            name="productName"
                            type='text'
                            placeholder="Product Name"
                            defaultValue={inputData?.productName}
                            required
                        />
                        <Input
                            label="Weight"
                            id="weight"
                            name="weight"
                            type='text'
                            placeholder="Weight"
                            defaultValue={inputData?.weight}
                            required
                        />
                    </div>
                    <div className={classes.details}>
                        <div className={classes.select}>
                            <label htmlFor="paymentStatus">Payment Status</label>
                            <select name="paymentStatus" id="paymentStatus"  value={inputData?.paymentStatus}>
                                <option value="Paid">Paid</option>
                                <option value="unPaid">unPaid</option>
                            </select>
                        </div>
                        <Input
                            label="Packaging Stage (ongoing information on shipment)"
                            id="stage"
                            name="stage"
                            type='text'
                            placeholder="Packaging Stage (ongoing information on shipment)"
                            defaultValue={inputData?.stage}
                            required
                        />
                        <Input
                            label="Local Logistic Fee "
                            id="fee"
                            name="fee"
                            type='text'
                            placeholder="Local Logistic Fee"
                            defaultValue={inputData?.fee}
                            required
                        />
                        <Input
                            label="Payment Method"
                            id="paymentMethod"
                            name="paymentMethod"
                            type='text'
                            placeholder="Payment Method"
                            defaultValue={inputData?.paymentMethod}
                            required
                        />
                        <Input
                            label="Description (For Invoice - Logistic fee)"
                            id="description"
                            name="description"
                            type='text'
                            placeholder="Description (For Invoice - Logistic fee)"
                            defaultValue={inputData?.description}
                            required
                        />
                        <div>
                            <Input
                                label="Departure Date"
                                id="departure"
                                name="departure"
                                type='date'
                                placeholder="Departure Date"
                                defaultValue={inputData?.departure}
                                required
                            />
                            <Input
                                label="Arrival Date"
                                id="arrival"
                                name="arrival"
                                type='date'
                                placeholder="Arrival Date"
                                defaultValue={inputData?.arrival}
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.textarea}>
                <div>
                    <label htmlFor="account">Accont Information</label>
                    <textarea name="account" id="account" cols='15' rows='5'  defaultValue={inputData?.account}></textarea>
                </div>
                <div>
                    <label htmlFor="message">Company Alert Message</label>
                    <textarea name="message" id="message" cols='15' rows='5'  defaultValue={inputData?.message}></textarea>
                </div>
            </div>
            <p className={classes.actions}>{children}</p>
            </div>
        </form>
    );
};

export default Form;
