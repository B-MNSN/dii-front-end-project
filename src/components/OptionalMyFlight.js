import { TbPlaneArrival } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';

function OptionalMyFlight({ flight }) {
    if (flight.return?.price) {
        return (
            <div className="arrivalFlight col d-flex">
                <TbPlaneArrival size='40' className='me-3' color='#02457A' />
                <div className='col-md'>
                    <h5 className='fw-bolder'>{flight.return?.departLocate} <BsArrowRightShort /> {flight.return?.landLocate}</h5>
                    <p>{`${flight.return?.departLocate} ${flight.return?.departCode}`} <BsArrowRightShort /> {`${flight.return?.landLocate} ${flight.return?.landCode} | ${flight.return?.departDay} | ผู้ใหญ่ ${flight.traveler} | ${flight.return?.planeClass}`}</p>
                </div>
            </div>
        );
    }
}
export default OptionalMyFlight;