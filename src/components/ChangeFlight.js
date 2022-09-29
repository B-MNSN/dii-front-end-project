import { useState } from 'react';
import { Modal, Container, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';


function ChangeFlight(props) {
    const [departDay, setdepartDay] = useState(new Date());
    const handleDateChangeDepart = (date) => { setdepartDay(date);};

    const [selectDateArrival, setSelectDateArrival] = useState(new Date());
    const handleDateChangeArrival = (date) => { setSelectDateArrival(date);};

    const option = [
        { value: 'เชียงใหม่', text: 'เชียงใหม่' },
        { value: 'กรุงเทพมหานคร', text: 'กรุงเทพมหานคร' }
    ];

    const [travel, setTravel] = useState(' ');
    const [departLocate, setDepartLocate] = useState(option[0].value);
    const [landLocate, setLeadLocate] = useState(option[1].value);
    const [isActive, setIsActive] = useState(false);
    const [planeClass, setPlaneClass] = useState(' ');

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    }

    // const onSearch = (event) => {
    //     event.preventDefault();
    //     console.log(departLocate, landLocate, departDay, selectDateArrival, travel)

    // };
    const travelChange = event => {
        // setTravel('เที่ยวเดียว')
        let flightOptionValue;
        flightOptionValue = (event?.target.innerText);

        setTravel(flightOptionValue);
        setIsActive(!true)
    };

    const planeClassChange = event => {
        let planeClassValue;
        planeClassValue = (event?.target.innerText);
        setPlaneClass(planeClassValue);
        console.log(planeClass);
        
    };

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='topModal bg-opacity-10 btn-light'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className='ms-3 mt-1 mb-0 fw-bold'>เปลี่ยนเที่ยวบิน</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary bg-opacity-10">
                <Form>
                    <Container className='px-5 py-3'>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <div className='d-flex justify-content-space-around shadow-sm rounded-3 border border-1 mt-2'>
                                    <div className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3 d-flex justify-content-center ' style={{ backgroundColor: isActive ? '#02457A' : '', color: isActive ? 'white' : '' }} values={'เที่ยวเดียว'} onClick={travelChange}  >
                                            เที่ยวเดียว
                                        </div>
                                        <div className='btnFlight fw-bold rounded-5 w-50 my-2 mx-3 d-flex justify-content-center' values={'ไป-กลับ'} onClick={travelChange}  >
                                            ไป-กลับ
                                        </div>
                                    </div>
                            </Col>
                            <Col lg={8}>
                                <div className='row d-flex justify-content-center shadow-sm rounded-3 border border-1 m-auto mt-2'>
                                <div id='planeClass' className='col btnCabinClass fw-bold rounded-5 my-2 ms-3 d-flex justify-content-center' value={'Economy'} onClick={planeClassChange}>Economy </div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 d-flex justify-content-center' value={'Premium economy'} onClick={planeClassChange}>Premium economy</div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 d-flex justify-content-center' value={'Business class'} onClick={planeClassChange}>Business class </div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 me-3 d-flex justify-content-center' value={'First class'} onClick={planeClassChange}>First class</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pb-3'>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ต้นทาง</Form.Label>
                                    <Form.Select value={departLocate} onChange={handChange(setDepartLocate)}>
                                        {option.map(option => (
                                            <option key={option.value} value={option.value}>{option.text}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ปลายทาง</Form.Label>
                                    <Form.Select value={landLocate} onChange={handChange(setLeadLocate)}>
                                        {option.map(option => (
                                            <option key={option.value} value={option.value}>{option.text}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันออกเดินทาง</Form.Label>
                                    <div>
                                        <DatePicker dateFormat="dd/MM/yyyy" selected={departDay} value={departDay} onChange={handleDateChangeDepart}/>
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
                                    <Form.Select>
                                        <option>ผู้ใหญ่</option>
                                        <option>เด็ก</option>
                                        <option>ทารก</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={4} className='d-flex justify-content-end align-items-center'>
                                <Form.Group >
                                    <Form.Label></Form.Label>
                                    <Link to={`/bookFlight?travel=${travel}&departLocate=${departLocate}&landLocate=${landLocate}&planeClass=${planeClass}`}><button className='btnChange shadow-sm rounded-3 fw-bold px-5 py-1'>Change</button></Link>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default ChangeFlight;