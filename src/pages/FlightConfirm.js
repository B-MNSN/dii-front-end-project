import MyFlight from '../components/MyFlight';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import MyFlightDetails from '../components/MyFlightDetails';
import PriceDetails from '../components/PriceDetails';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function FlightConfirm() {
    const [books, setBooks] = useState({});
    // const [airports, setAirports] = useState({});

    useEffect(() => {
        async function getBooks() {
            await axios.get(
                'http://localhost:8000/books/U0002'
            ).then(res => {
                setBooks(res.data);
            });
            // await axios.get(
            //     'http://localhost:8000/airports'
            // ).then(res => {
            //     setAirports(res.data);
            // });
        }
        getBooks();
    }, []);
    return (
        <>
            <Navbar />
            <Container>
                <MyFlight books={books} />
                <div className='d-flex justify-content-center w-75'>
                    <div className='row '>
                        <div className='col-lg-8'>
                            <MyFlightDetails books={books} />
                        </div>
                        <div className='col'>
                            <PriceDetails books={books} />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default FlightConfirm;