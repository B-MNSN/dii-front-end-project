import React from 'react';
import BookingSearch from '../components/BookingSearch';
import { Container, Row, Card, Button} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Home() {
    const mainPic = require('../Elements/airplane-bg.jpg')
    async function getProducts() {
        const products = await axios.get(
            'http://localhost:8000/flights'
        );
        console.log(products);
    }
    getProducts();
    return (
        <>
            <Navbar/>
            <Container fluid='lg'>
                <Row className='mt-3 mx-0 H-seachBoxContainer position-relative'>
                    <div className='H-seachBox d-flex justify-content-center position-absolute'>
                        <BookingSearch />
                    </div>
                    <img src={mainPic} className='H-mainPic rounded p-0 shadow' alt='...' />
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Card style={{ width: '18rem' }} className='rounded p-0 m-3'>
                        <Card.Img variant="top" src={mainPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='rounded p-0 m-3'>
                        <Card.Img variant="top" src={mainPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='rounded p-0 m-3'>
                        <Card.Img variant="top" src={mainPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='rounded p-0 m-3'>
                        <Card.Img variant="top" src={mainPic} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>


        </>
    )
}

export default Home;