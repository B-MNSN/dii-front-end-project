import { TbPlaneDeparture } from 'react-icons/tb';
import { BsClock } from 'react-icons/bs';
import { RiMore2Line } from 'react-icons/ri';
function OptionalFlightDetails({ books }) {
    if (books.return?.price) {
        return (<div className='flightDeparture bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4 '>
            <div className='row my-4 mx-5 d-flex justify-content-center'>
                <div className='col d-flex align-items-center border-bottom border-dark border-2'>
                    <TbPlaneDeparture size='40' className='me-3 mb-3' color='#02457A' />
                    <h4 className='fw-bolder'>เที่ยวบินขาเข้า</h4>
                </div>
                <div className='row m-3 '>
                    <div className='col-md-3 mb-3 d-flex align-items-center'>
                        <div className='row'>
                            <div className='d-flex justify-content-center '>
                                <img src={books.return?.imgURLlogo} alt='air-asia-flight' className='picFlight img-fluid' width={100} />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <h5 className='fw-bold'>{books.return?.flightName}</h5>
                                    <text>{books.return?.flightCode}</text>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <div className=''>
                            <div className='row'>
                                <div className='col'>
                                    <p className='m-0 fw-bold'>{books.return?.departTime}</p>
                                    <p className='m-0'>{books.return?.departDay}</p>
                                </div>
                                <div className='col'>
                                    <p className='m-0 fw-bold'>{books.return?.departLocate} {`(${books.return?.departCode})`}</p>
                                </div>
                            </div>
                            <div className='my-3 d-flex align-items-center'>
                                <div>
                                    <RiMore2Line size={40} />
                                </div>
                                <div className=''>
                                    <BsClock />
                                    <text>{books.return?.duration}</text>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p className='m-0 fw-bold'>{books.return?.landTime}</p>
                                    <p className='m-0'>{books.return?.departDay}</p>
                                </div>
                                <div className='col'>
                                    <p className='m-0 fw-bold'>{books.return?.landLocate} {`(${books.return?.landCode})`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default OptionalFlightDetails;