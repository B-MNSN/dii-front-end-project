import axios from 'axios';
import { Modal } from 'react-bootstrap';

function Cancel({ show, onHide, bookID }) {
    // console.log(bookID);
    const simProps = { show, onHide }
    const confirmDelete = async () => {
        const res = await axios.delete(`http://localhost:8000/user/${bookID}`);
        // console.log(res);
        window.location.href = '/myBooking';
    }
    const colse = () => {
        window.location.href = '/myBooking';
    }
    return (
        <>
            <Modal {...simProps} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closebutton className='bg-opacity-10 btn-light'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className='ms-2 d-flex align-items-center '>
                            <h4 className='mt-1 mb-0 fw-bolder'>Cencel</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary bg-opacity-10">
                    <div className='d-flex justify-content-center'>
                        <text className='fw-bold fs-4'>"ยกเลิกการจองหรือไม่"</text>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button onClick={confirmDelete} className='btnConDelete rounded-3 px-3 me-2'>ยืนยัน</button>
                        <button onClick={colse} className='btn btn-outline-danger'>ยกเลิก</button>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    )
}
export default Cancel;