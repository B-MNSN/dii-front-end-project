import { TbPlaneDeparture } from 'react-icons/tb';
// import { TbPlaneArrival } from 'react-icons/tb';
import airAsiaFlight from '../Elements/air-asia.png';
import { BsClock } from 'react-icons/bs';
import { RiMore2Line } from 'react-icons/ri';

function MyFlightDetails() {
    return (
        <>
            <div className='flightDeparture bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4 '>
                <div className='row my-4 mx-5 d-flex justify-content-center'>
                    <div className='col d-flex align-items-center border-bottom border-dark border-2'>
                        <TbPlaneDeparture size='40' className='me-3 mb-3' color='#02457A' />
                        <h4 className='fw-bolder'>เที่ยวบินขาออก</h4>
                    </div>
                    <div className='row m-3 '>
                        <div className='col-md-3 mb-3 d-flex align-items-center'>
                            <div className='row'>
                                <div className='d-flex justify-content-center '>
                                    <img src={airAsiaFlight} alt='air-asia-flight' className='picFlight img-fluid' width={100} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div>
                                        <h5 className='fw-bold'>AirAsia</h5>
                                        <text>AS100</text>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <div className=''>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='m-0 fw-bold'>06:15</p>
                                        <p className='m-0'>29 ธ.ค. 2023</p>
                                    </div>
                                    <div className='col'>
                                        <p className='m-0 fw-bold'>กรุงเทพมหานคร (BKK)</p>
                                    </div>
                                </div>
                                <div className='my-3 d-flex align-items-center'>
                                    <div>
                                        <RiMore2Line size={40} />
                                    </div>
                                    <div className=''>
                                        <BsClock />
                                        <text>1h 15m</text>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='m-0 fw-bold'>07:30</p>
                                        <p className='m-0'>29 ธ.ค. 2023</p>
                                    </div>
                                    <div className='col'>
                                        <p className='m-0 fw-bold'>เชียงใหม่ (CNX)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};
export default MyFlightDetails;