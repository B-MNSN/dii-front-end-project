// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../logo.png';
import { useState } from 'react';
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState([]);
    const [pwd, setPwd] = useState([]);

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
        console.log(stat)
        localStorage.setItem('status', JSON.stringify(stat.data))
    };
    console.log(JSON.parse(localStorage.getItem('status')))
    return (
        <>
            <div className='login-page'>
                <img src={logo} alt='logo' className='logo mt-3' />
                <div className='login-bg mt-3 rounded-3'>
                    <div className='d-flex justify-content-end mt-3 me-4'>
                        <button className='tab-signin fw-bolder'>Sign in</button>
                        <button className='tab-signup fw-bolder'>Sign up</button>
                    </div>
                    <Form onSubmit={onSubmit} className='m-5'>
                        <h1 className='fs-3 mb-3 fw-bolder'>Log into your account</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email or username" onChange={handChange(setUsername)} />
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
        </>

    );
}

export default Login;