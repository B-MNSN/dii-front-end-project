import { TbPlaneDeparture } from 'react-icons/tb';
// import { TbPlaneArrival } from 'react-icons/tb';

function MyFlightDetails(){
    return(
        <>
            <div className='flightDeparture bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4'>
                <div className='my-4 mx-5'>
                    <div className='d-flex align-items-center border-bottom border-dark border-2'>
                        <TbPlaneDeparture size='50' className='me-3 mb-3' color='#02457A'/>
                        <h3 className='fw-bolder'>เที่ยวบินขาออก</h3>
                    </div>
                </div>

            </div>
        </>
    );
};
 export default MyFlightDetails;