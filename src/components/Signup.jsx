import Form from 'react-bootstrap/Form';
// import logo from '../logo.png';
import logo from '../logo.png';

function Signup() {
  return (
    <>
    <div className=' w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
        <img src={logo} alt='logo' className='logo mt-3'/>
        <div className='signup-bg mt-3 rounded-3'>
            <div className='d-flex justify-content-end mt-3 me-4'>
                <button className='tab-signin fw-bolder'>Sign in</button>
                <button className='tab-signup fw-bolder'>Sign up</button>
            </div>
            <Form className='mx-5 mb-4 mt-2'>
            <h1 className='fs-3 mb-3 fw-bolder'>Create to your account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <button className='buttonSignup btn text-light' type="submit">Create account</button>
                </div>
            </Form>
        </div></div>
    </>
    
  );
}

export default Signup;