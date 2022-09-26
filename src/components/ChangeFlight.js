import { useState } from 'react';
import { Modal, Container, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-date-picker';



function ChangeFlight(props) {
    const [selectDateDepart, setSelectDateDepart] = useState(new Date());
    const handleDateChangeDepart = (date) => { setSelectDateDepart(date);};

    const [selectDateArrival, setSelectDateArrival] = useState(new Date());
    const handleDateChangeArrival = (date) => { setSelectDateArrival(date);};

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='bg-secondary bg-opacity-10'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className='ms-3 mt-1 mb-0 fw-bold'>เปลี่ยนเที่ยวบิน</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary bg-opacity-10">
                <Form>
                    <Container className='px-5 py-3'>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <div className='d-flex justify-content-space-around shadow-sm rounded-3 border border-1'>
                                    <button className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3'>เที่ยวเดียว</button>
                                    <button className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3'>ไป-กลับ</button>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className=' d-flex justify-content-center shadow-sm rounded-3 border border-1'>
                                    <button className='btnCabinClass fw-bold rounded-5 px-4 my-2 mx-3'>Economy </button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>Premium economy</button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>Business class </button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>First class</button>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ต้นทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ปลายทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันออกเดินทาง</Form.Label>
                                    <div>
                                        <DatePicker dateFormat="dd/MM/yyyy" selected={selectDateDepart} value={selectDateDepart} onChange={handleDateChangeDepart}/>
                                    </div>
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันเดินทางกลับ</Form.Label>
                                    <div>
                                        <DatePicker dateFormat="dd/MM/yyyy" selected={selectDateArrival} value={selectDateArrival} onChange={handleDateChangeArrival}/>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ผู้โดยสาร</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4} className='d-flex justify-content-end align-items-center'>
                                <Form.Group >
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="submit"
                                        value="Change"
                                        autoFocus
                                        className='btnChange shadow-sm rounded-3 fw-bold px-5 py-1' 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal >
    );
}


export default ChangeFlight;