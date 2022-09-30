import { Modal } from 'react-bootstrap';
import logo from '../logo.png';

function Ticket({ show, onHide, book, flight }) {
    console.log(flight)
    const propsSim = { show, onHide };
    return (
        <>
            <Modal {...propsSim} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className='topModal bg-opacity-10 btn-light'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className='ms-5 d-flex align-items-center '>
                            <img src={logo} alt='logo' width={80} />
                            {/* <h4 className='ms-3 mt-1 mb-0 fw-bold'>BUN-AL</h4> */}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary bg-opacity-10">
                    <div className='row mx-5 my-2'>
                        <div className='col-12 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>Name:</text>
                            <text className='fs-6'>{book?.fname} {book?.lname}</text>
                        </div>
                        <div className='col-6 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>From:</text>
                            <text className='fs-6'>{flight?.departLocate}</text>
                        </div>
                        <div className='col-6 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>To:</text>
                            <text className='fs-6'>{flight?.landLocate}</text>
                        </div>
                        <div className='col-4 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>Flight:</text>
                            <text className='fs-6'>{flight?.flightCode}</text>
                        </div>
                        <div className='col-4 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>Date:</text>
                            <text className='fs-6'>{flight?.departDay}</text>
                        </div>
                        <div className='col-4 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>Seat:</text>
                            <text className='fs-6'>1A</text>
                        </div>
                        <div className='col-4 mb-4'>
                            <text className='me-3 fw-bold text-uppercase fs-5'>Boarding Time:</text>
                            <text className='fs-6'>{flight?.departTime}</text>
                        </div>
                        <div className='col-12 d-flex justify-content-end'>
                            <button className='btnEdit shadow-sm rounded-3 fw-bold px-5 py-1'>แก้ไขข้อมูล</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}
export default Ticket;