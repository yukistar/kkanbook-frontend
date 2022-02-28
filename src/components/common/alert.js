import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Alert = (props) => {
    const [showAlert, setShowAlert] = useState(props.showAlert);

    const closeAlert = () => {
        setShowAlert(false);
        props.setAlertMessage("");
    }

    return (
        <div>
            <Modal dialogClassName='custom-dialog' show={showAlert} onHide={closeAlert}>
                <Modal.Body className="modal-text">{props.alertMessage}</Modal.Body>
            </Modal>
        </div>
    )
}

export default Alert