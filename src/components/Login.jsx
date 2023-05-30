// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../logo.png';
import { useState } from 'react';
import axios from 'axios';
import Container from './Container';
import styled from 'styled-components';

function Login({className}) {
    function onLoad() {
        localStorage.clear();
    }
    const [username, setUsername] = useState([]);
    const [pwd, setPwd] = useState([]);
    const [UserInfo, setUserInfo] = useState({})

    const handChange = (fn) => {
        return (event) => {
            fn(event.target.value);
        };
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const stat = await axios.post('http://localhost:8000/userLogin', {
            username, pwd
        });
        localStorage.setItem('status', JSON.stringify(stat.data))
        setUserInfo(JSON.parse(localStorage.getItem('status')))

    };
    console.log(UserInfo)
    if (UserInfo?.username) {
        window.location.href = '/home';
    } else {
        return (
            <>
                <div onLoad={onLoad} className={`${className} d-flex align-items-center justify-content-center`}>
                    <Container>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <img src={logo} alt='logo' className='logo mt-3' width={150} />
                            </div>
                            
                            <div className='login-bg col mt-3 rounded-3'>
                                {/* <div className='d-flex justify-content-end mt-3 me-4'>
                                    <button className='tab-signin fw-bolder'>Sign in</button>
                                    <button className='tab-signup fw-bolder'>Sign up</button>
                                </div> */}
                                <Form onSubmit={onSubmit} className='m-5'>
                                    <h1 className='fs-3 mb-3 fw-bolder'>Log into your account</h1>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={handChange(setUsername)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={handChange(setPwd)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <a href="/" className='text-decoration-none text-muted'>forget password?</a>
                                    </Form.Group>
                                    <div className='d-flex justify-content-end'>
                                        <button className='buttonLogin btn w-25 text-light' type="submit">Login</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        
                    </Container>
                </div>
            </>

        );
    }

}

export default styled(Login)`
    background: linear-gradient(180deg, rgba(1, 138, 190, 0.6) 0%, rgba(32, 91, 138, 0.4) 100%);
    height: 100vh;
    
    .login-bg {
        width: 35%;
        background: rgba(217, 217, 217, 0.5);
        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
    }

    .tab-signin{
        background: none;
        border: none;
    }

    .tab-signin:hover{
        color: #ffffff;
        border-bottom: 3px solid #ffffff;
    }
`