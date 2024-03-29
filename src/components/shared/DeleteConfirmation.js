import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConfirmation  = (props) =>{
    return (<>
        <Modal show={props.showModal} onHide={()=>{props.closeDeleteModalHandler()}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.closeDeleteModalHandler()}}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {props.confirmDeleteHandler()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default DeleteConfirmation;