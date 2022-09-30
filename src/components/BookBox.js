import Container from './Container';
import Ticket from './Ticket';
import Cancel from './Cancel';
import { useState, useEffect } from 'react'
import axios from 'axios';
function BookBox({ book }) {

    const [modalShow, setModalShow] = useState(false);
    const [cancelModel, setCancelModel] = useState(false);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        async function getFlights() {
            const flights = await axios.get(
                `http://localhost:8000/flights?id=${book.flightID}`
            );
            setFlights(flights.data[0]);

        }
        getFlights();
    }, [book]);

    return (
        <>
            <Container>
                <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 rounded-4">
                    <div className='row m-3 d-flex align-items-center justify-content-center'>
                        <div className='col d-flex justify-content-center'>
                            <text className='fw-bold me-2'>Name: </text>
                            <text>{book?.fname} {book?.lname}</text>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <text className='fw-bold me-2'>Flight Code:</text>
                            <text>{flights?.flightCode}</text>
                        </div>
                        <div className='col-md-3 d-flex justify-content-center mt-2' onClick={() => setModalShow(true)} >
                            <h5 className='text-success fw-bold'>จองแล้ว</h5>
                        </div>
                        <div className='col d-flex justify-content-center' >
                            <button className='btn btn-outline-danger shadow-sm rounded-3 fw-bold px-3 py-1' onClick={() => setCancelModel(true)}>ยกเลิกการจอง</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Ticket show={modalShow} book={book} flight={flights} onHide={() => setModalShow(false)} />
            <Cancel show={cancelModel} onHide={() => setCancelModel(false)} />
        </>
    )
}
export default BookBox;