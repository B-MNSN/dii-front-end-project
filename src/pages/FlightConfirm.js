import MyFlight from '../components/MyFlight';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import MyFlightDetails from '../components/MyFlightDetails';
import PriceDetails from '../components/PriceDetails';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { fetchFlights } from '../reducers/actions';
import { useSelector, useDispatch } from 'react-redux';


function FlightConfirm() {
    let userStat = JSON.parse(localStorage.getItem('status'));
    // const [flights, setFlights] = useState([]);
    const flights = useSelector((state) => state.flights);
    const dispatch = useDispatch();
  
    useEffect(() => {
        async function getFlights() {
            const flights = await axios.get(
                `http://localhost:8000/flights${window.location.search}`
            );
            // setFlights(flights.data[0]);
            dispatch(fetchFlights(flights.data[0]))

        }
        getFlights();
    }, []);

    if (userStat?.username) {
        return (
            <>
                <Navbar />
                {flights ? (
                    <Container>
                    <MyFlight flight={flights} />
                    <div className='d-flex justify-content-center w-75'>
                        <div className='row '>
                            <div className='col-lg-8'>
                                <MyFlightDetails flight={flights} />
                            </div>
                            <div className='col'>
                                <PriceDetails flight={flights} />
                            </div>
                        </div>
                    </div>
                </Container>
                ) : (
                    <div>Loading Flighgts...</div>
                )}

            </>
        );
    } else {
        window.location.href = '/';
    }

};

export default FlightConfirm;