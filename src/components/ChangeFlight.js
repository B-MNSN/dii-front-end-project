import { Modal, Container, Row, Col, Form } from 'react-bootstrap';
function ChangeFlight(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton className='bg-secondary bg-opacity-10'>
                <Modal.Title id="contained-modal-title-vcenter">
                    เปลี่ยนเที่ยวบิน
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary bg-opacity-10">
                <Form>
                    <Container className='px-5 py-3'>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={8}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>ต้นทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>ปลายทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>วันออกเดินทาง</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>วันเดินทางกลับ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>ผู้โดยสาร</Form.Label>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4} className='d-flex justify-content-center align-items-center'>
                                <Form.Group >
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="submit"
                                        value="Change"
                                        autoFocus
                                        className='bg-primary w-100'
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