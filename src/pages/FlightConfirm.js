import MyFlight from '../components/MyFlight';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import MyFlightDetails from '../components/MyFlightDetails';
import PriceDetails from '../components/PriceDetails';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function FlightConfirm() {
    const [books, setBooks] = useState({});

    useEffect(() => {
        async function getBooks() {
            await axios.get(
                'http://localhost:8000/books/U0001'
            ).then(res => {
                setBooks(res.data);
            });
        }
        getBooks();
    }, []);
    return (
        <>
            <Navbar />
            <Container>
                <MyFlight item={books} />
                <div className='d-flex justify-content-center w-75'>
                    <div className='row '>
                        <div className='col-lg-8'>
                            <MyFlightDetails />
                        </div>
                        <div className='col'>
                            <PriceDetails />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default FlightConfirm;