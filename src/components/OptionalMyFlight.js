import { TbPlaneArrival } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';

function OptionalMyFlight({ books }) {
    if (books.return?.price) {
        return (
            <div className="arrivalFlight col d-flex">
                <TbPlaneArrival size='40' className='me-3' color='#02457A' />
                <div className='col-md'>
                    <h5 className='fw-bolder'>{books.return?.departLocate} <BsArrowRightShort /> {books.return?.landLocate}</h5>
                    <p>{`${books.return?.departLocate} ${books.return?.departCode}`} <BsArrowRightShort /> {`${books.return?.landLocate} ${books.return?.landCode} | ${books.return?.departDay} | ผู้ใหญ่ ${books.traveler} | ${books.return?.planeClass}`}</p>
                </div>
            </div>
        );
    }
}
export default OptionalMyFlight;