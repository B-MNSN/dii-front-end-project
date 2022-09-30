import { TbPlaneDeparture } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';
//import OptionalMyFlight from './OptionalMyFlight';
function MyFLight({ flight }) {
    let traveler = new URLSearchParams(window.location.search).get("traveler");
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-center rounded-4">
                <div className='row d-flex align-bookss-center m-4'>
                    <div className="departureFlight col d-flex">
                        <TbPlaneDeparture size='40' className='me-3' color='#02457A' />
                        <div className='col-md'>
                            <h5 className='fw-bolder'>{`${flight?.departLocate}`} <BsArrowRightShort /> {flight?.landLocate}</h5>
                            <p>{`${flight?.departLocate} ${flight?.departCode}`}<BsArrowRightShort /> {`${flight?.landLocate} ${flight?.landCode} | ${flight?.departDay} | ผู้ใหญ่ ${traveler} | ${flight?.planeClass}`}</p>
                        </div>
                    </div>
                    {/* <OptionalMyFlight flight={flight} /> */}
                </div>
            </div>
        </>

    )
};
MyFLight.propTypes = {
    books: PropTypes.object.isRequired
};


export default MyFLight;