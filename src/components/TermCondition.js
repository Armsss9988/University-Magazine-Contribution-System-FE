import { Modal } from 'react-bootstrap'

function TermCondition(props) {
    return (
        <Modal
            show={props.show}
            dialogClassName="modal-90w"
            onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Terms and conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
        </Modal>)
}

export default TermCondition