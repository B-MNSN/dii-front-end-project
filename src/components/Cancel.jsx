import { Modal } from 'react-bootstrap';

function Cancel(props){
    
    
    return(
        <>
            <Modal {...props}  aria-labelledby="contained-modal-title-vcenter" centered>
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
                        <button className='btnConDelete shadow-sm rounded-3 px-3 me-2'>ยืนยัน</button>
                        <button className='btn btn-outline-dark'>ยกเลิก</button>
                    </div>
                    
                    
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Cancel;