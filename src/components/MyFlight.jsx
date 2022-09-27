import { TbPlaneDeparture } from 'react-icons/tb';
import { TbPlaneArrival } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';

function MyFLight({ books }) {
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-center rounded-4">
                <div className='row d-flex align-bookss-center m-4'>
                    <div className="departureFlight col d-flex">
                        <TbPlaneDeparture size='40' className='me-3' color='#02457A' />
                        <div className='col-md'>
                            <h5 className='fw-bolder'>{`${books.depart?.departLocate}`} <BsArrowRightShort /> {books.depart?.landLocate}</h5>
                            <p>{`${books.depart?.departLocate} ${books.depart?.departCode}`}<BsArrowRightShort /> {`${books.depart?.landLocate} ${books.depart?.landCode} | ${books.depart?.departDay} | ผู้ใหญ่ ${books.traveler} | ${books.depart?.planeClass}`}</p>
                        </div>
                    </div>
                    <div className="arrivalFlight col d-flex">
                        <TbPlaneArrival size='40' className='me-3' color='#02457A' />
                        <div className='col-md'>
                            <h5 className='fw-bolder'>{books.return?.departLocate} <BsArrowRightShort /> {books.return?.landLocate}</h5>
                            <p>{`${books.return?.departLocate} ${books.return?.departCode}`} <BsArrowRightShort /> {`${books.return?.landLocate} ${books.return?.landCode} | ${books.return?.departDay} | ผู้ใหญ่ ${books.traveler} | ${books.return?.planeClass}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};
MyFLight.propTypes = {
    books: PropTypes.object.isRequired
};


export default MyFLight;