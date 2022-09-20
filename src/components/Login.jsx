// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../logo.png';

function Login() {
  return (
    <>
    <div className='login-page'>
        <img src={logo} alt='logo' className='logo mt-3'/>
        <div className='login-bg mt-3 rounded-3'>
            <div className='d-flex justify-content-end mt-3 me-4'>
                <button className='tab-signin fw-bolder'>Sign in</button>
                <button className='tab-signup fw-bolder'>Sign up</button>
            </div>
            <Form className='m-5'>
            <h1 className='fs-3 mb-3 fw-bolder'>Log into your account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email or username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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