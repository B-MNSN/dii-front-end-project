import { TbPlaneDeparture } from 'react-icons/tb';
import { TbPlaneArrival } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';

function MyFLight({ item }) {
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-center rounded-4">
                <div className='row d-flex align-items-center m-4'>
                    <div className="departureFlight col d-flex">
                        <TbPlaneDeparture size='40' className='me-3' color='#02457A' />
                        <div className='col-md'>
                            <h5 className='fw-bolder'>{item.depart?.departLocate} <BsArrowRightShort /> {item.depart?.landLocate}</h5>
                            <p>{item.depart?.departLocate}<BsArrowRightShort /> {item.depart?.landLocate} | {item.depart?.departDay} | ผู้ใหญ่ {item.traveler} | {item.depart?.planeClass}</p>
                        </div>
                    </div>
                    <div className="arrivalFlight col d-flex">
                        <TbPlaneArrival size='40' className='me-3' color='#02457A' />
                        <div className='col-md'>
                            <h5 className='fw-bolder'>{item.return?.departLocate} <BsArrowRightShort /> {item.return?.landLocate}</h5>
                            <p>{item.return?.departLocate} <BsArrowRightShort /> {item.return?.landLocate} | {item.return?.departDay} | ผู้ใหญ่ {item.traveler} | {item.return?.planeClass}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};
MyFLight.propTypes = {
    item: PropTypes.object.isRequired
};


export default MyFLight;