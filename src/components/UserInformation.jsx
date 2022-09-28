import Navbar from './Navbar';
import Container from './Container';
import {Form} from 'react-bootstrap';

function UserInformation() {
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
                    <Form>
                        <div className='row m-5'>
                            <div className='col-md-12'>
                                <Form.Group className="mb-3 col-md-3">
                                    <Form.Label className='fw-bold'>คำนำหน้าชื่อ</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>คำนำหน้า</option>
                                        <option value="1">นางสาว</option>
                                        <option value="2">นาง</option>
                                        <option value="3">นาย</option>
                                        <option value="3">ด.ญ</option>
                                        <option value="3">ด.ช</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>ชื่อ</Form.Label>
                                    <Form.Control type="text" placeholder="ชื่อ" />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label className='fw-bold'>นามสกุล</Form.Label>
                                    <Form.Control type="text" placeholder="นามสกุล" />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>เบอร์มือถือ</Form.Label>
                                    <Form.Control type="text" placeholder="เบอร์มือถือ" />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
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

export default UserInformation;