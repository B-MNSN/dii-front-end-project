
import Flightbox from './FlightBox';
function CardSelectFlight({ flights }) {
    console.log(flights);
    return (
        <>
            {flights.map((flight) => (
                <Flightbox key={flight.id} flight={flight} />
            ))}
        </>
    )
}

export default CardSelectFlight;