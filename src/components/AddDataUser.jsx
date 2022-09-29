import Navbar from './Navbar';
import Container from './Container';
import {Form} from 'react-bootstrap';
import { useState } from 'react';
import propType from 'prop-types';
import axios from 'axios';
function AddDataUser({addInform}) {
    const optionPrefix = [
        {value: 'นางสาว', text: 'นางสาว'},
        {value: 'นาง', text: 'นาง'},
        {value: 'นาย', text: 'นาย'},
        {value: 'ด.ญ', text: 'ด.ญ'},
        {value: 'ด.ช', text: 'ด.ช'},
    ];

    const [prefix, setPrefix] = useState(optionPrefix[0].value);
    const [fname, setFname] = useState(' ');
    const [lname, setLname] = useState(' ');
    const [phoneNumber, setPhoneNumber] = useState(' ');
    const [email, setEmail] = useState(' ');

    const handChange =(fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };
    const onSubmit = (event) => {
        event.preventDefault();
        // addInform({fname, lname, phoneNumber, email});
        console.log({fname, lname, phoneNumber, email});
        axios.post('http://localhost:8000/user', {
            fname,
            lname,
            phoneNumber,
            email
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    
    return(
        <>
            <Navbar/>
            <Container>
                <div className='bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded w-75'>
                    <div className='bgInform rounded-top'>
                        <div className='ms-5 py-3 '>
                            <h4 className='fw-bold text-white m-0'>ข้อมูลติดต่อ</h4>
                        </div>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <div className='row m-5'>
                            <div className='col-md-12'>
                                <Form.Group className="mb-3 col-md-3">
                                    <Form.Label className='fw-bold'>คำนำหน้าชื่อ</Form.Label>
                                    <Form.Select placeholder="คำนำหน้า" value={prefix} onChange={handChange(setPrefix)}>
                                        {optionPrefix.map(optionPrefix => (
                                            <option key={optionPrefix.value} value={optionPrefix.value}>{optionPrefix.text}</option> 
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>ชื่อ</Form.Label>
                                    <Form.Control type="text" placeholder="ชื่อ" name='fname' id='fname' onChange={handChange(setFname)} />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label className='fw-bold'>นามสกุล</Form.Label>
                                    <Form.Control type="text" placeholder="นามสกุล" name='lname' id='lname' onChange={handChange(setLname)}/>
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>เบอร์มือถือ</Form.Label>
                                    <Form.Control type="text" placeholder="เบอร์มือถือ" name='phoneNumbe' id='phoneNumbe' onChange={handChange(setPhoneNumber)} />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' id='email' onChange={handChange(setEmail)}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className='col d-flex justify-content-end'>
                                <button type="submit" className='btnConfirm shadow-sm rounded-2 px-3 py-1'>ยืนยันการจอง</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}

AddDataUser.propType = {
    addInform : propType.shape({
        fname: propType.string.isRequired,
        lname: propType.string.isRequired,
        phoneNumber: propType.string.isRequired,
        email: propType.string.isRequired
    })
}

export default AddDataUser;