import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Flightbox from './FlightBox';
function CardSelectFlight() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        async function getFlights() {
            const flights = await axios.get(
                'http://localhost:8000/flights'
            );
            setFlights(flights.data);
        }
        getFlights();
    }, []);
    console.log(flights)
    return (
        <>{flights.map((flight) => (
            <Flightbox key={flight.id} item={flight} />
        ))}
        </>
    )
}

export default CardSelectFlight;