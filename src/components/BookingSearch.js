import React from 'react';
import { Form, Container, Row, Col} from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';

function BookingSearch() {
    return (
        <>
            <div className='rounded shadow bg-light d-flex justify-content-center'>
                <Form>
                    <Container className=' py-3'>
                        <Row className='pb-3 d-flex justify-content-center'>
                            <Col lg={3}>
                                <div className='d-flex justify-content-space-around shadow-sm rounded-3 border border-1'>
                                    <button className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3'>เที่ยวเดียว</button>
                                    <button className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3'>ไป-กลับ</button>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className=' d-flex justify-content-center shadow-sm rounded-3 border border-1'>
                                    <button className='btnCabinClass fw-bold rounded-5 px-4 my-2 mx-3'>Economy </button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>Premium economy</button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>Business class </button>
                                    <button className='btnCabinClass fw-bold rounded-5 px-3 my-2 mx-3'>First class</button>
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ต้นทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ปลายทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันออกเดินทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันเดินทางกลับ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ผู้โดยสาร</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={1} className='d-flex justify-content-center align-items-end'>
                                <button href='#' className='B-seachButton shadow-sm rounded-2'><RiSearchLine size={25} color={'#ffffff'} /></button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default BookingSearch;