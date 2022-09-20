import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function BookingSearch() {
    return (
        <>
            <div className=' w-75 rounded shadow'>
                <Form>
                    <Container className=' py-3'>
                        <Row className='pb-3 justify-content-center'>
                            <Col lg={6}>
                                <Form.Group className='shadow-sm rounded'>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='B-inputBox'
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className='shadow-sm rounded'>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label>จาก</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label>ไป</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label>วันออกเดินทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label>วันเดินทางกลับ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label>ผู้โดยสาร</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        className='shadow-sm rounded B-inputBox'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={1} className='d-flex justify-content-center align-items-end'>
                                <Button href='#' className='B-seachButton'><FaSearch color={'#ffffff'} /></Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default BookingSearch;