import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookingSearch() {
    const [departDay, setdepartDay] = useState(new Date());
    const handleDateChangeDepart = (date) => { setdepartDay(date); };

    const [selectDateArrival, setSelectDateArrival] = useState(new Date());
    const handleDateChangeArrival = (date) => { setSelectDateArrival(date); };

    const option = [
        { value: 'เชียงใหม่', text: 'เชียงใหม่' },
        { value: 'กรุงเทพมหานคร', text: 'กรุงเทพมหานคร' }
    ];

    const [travel, setTravel] = useState(' ');
    const [departLocate, setDepartLocate] = useState(option[0].value);
    const [landLocate, setLeadLocate] = useState(option[1].value);
    const [isActive, setIsActive] = useState(false);

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    }

    const onSearch = (event) => {
        event.preventDefault();
        console.log(departLocate, landLocate, departDay, selectDateArrival, travel)

    };
    const travelChange = event => {
        // setTravel('เที่ยวเดียว')
        let flightOptionValue;
        flightOptionValue = (event?.target.innerText);

        setTravel(flightOptionValue);
        setIsActive(event.true)


    }

    return (
        <>
            <div className='rounded shadow bg-light d-flex justify-content-center'>
                <Form onSubmit={onSearch}>
                    <Container className='py-3'>
                        <Row className='pb-3 d-flex justify-content-center'>
                            <Col lg={3}>
                                <div id='GG' className='d-flex justify-content-space-around shadow-sm rounded-3 border border-1 mt-2'>
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
                                    <div id='planeClass' className='col btnCabinClass fw-bold rounded-5 my-2 ms-3 d-flex justify-content-center'>Economy </div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 d-flex justify-content-center'>Premium economy</div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 d-flex justify-content-center'>Business class </div>
                                    <div className='col btnCabinClass fw-bold rounded-5 my-2 me-3 d-flex justify-content-center'>First class</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ต้นทาง</Form.Label>
                                    <Form.Select value={departLocate} onChange={handChange(setDepartLocate)}>
                                        {option.map(option => (
                                            <option key={option.value} value={option.value}>{option.text}</option>
                                        ))}
                                        {/* <option id='departLocate' name='departLocate' onChange={createSetState(setDepartLocate)} value={option.values}>กรุงเทพมหานคร</option> */}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ปลายทาง</Form.Label>
                                    <Form.Select value={landLocate} onChange={handChange(setLeadLocate)}>
                                        {option.map(option => (
                                            <option key={option.value} value={option.value}>{option.text}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันออกเดินทาง</Form.Label>
                                    <DatePicker dateFormat="dd/MM/yyyy" id='departTime' name='departTime' selected={departDay} value={departDay} onChange={handleDateChangeDepart} />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>วันเดินทางกลับ</Form.Label>
                                    <DatePicker dateFormat="dd/MM/yyyy" id='landTime' name='landTime' selected={selectDateArrival} value={selectDateArrival} onChange={handleDateChangeArrival} />
                                </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group>
                                    <Form.Label className='fw-bold'>ผู้โดยสาร</Form.Label>
                                    <Form.Select>
                                        <option>ผู้ใหญ่</option>
                                        <option>เด็ก</option>
                                        <option>ทารก</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={1} className='d-flex justify-content-center align-items-end '>
                                <Link to={`/bookFlight?departLocate=${departLocate}&landLocate=${landLocate}`}><button className='B-seachButton shadow-sm rounded-2 px-3 py-1'><RiSearchLine size={30} color={'#ffffff'} /></button></Link>

                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </>
    );
}

BookingSearch.propTypes = {
    item: propTypes.object.isRequired
};


export default BookingSearch;