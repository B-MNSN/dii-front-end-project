import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Flightbox({ flight }) {
    // console.log(flight);
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 rounded-4">
                <div className='row d-flex align-items-center justify-content-center m-4'>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img src={flight.imgURLlogo} alt='air-asia-flight' className='picFlight img-fluid' />
                    </div>
                    <div className='col-md-3 d-flex align-items-center'>
                        <div className='col'>
                            <p>{flight.departTime}</p>
                            <p>{flight.departLocate}</p>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <FaArrowRight />
                        </div>
                        <div className='col'>
                            <p>{flight.landTime}</p>
                            <p>{flight.landLocate}</p>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <p>{flight.duration}</p>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <RiLuggageDepositLine size='30' color='#02457A' className='' />
                        <p>10 ก.ม</p>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <p>{`฿${flight.price}/คน `}</p>
                    </div>
                    <div className='col-md-3 d-flex justify-content-center'>
                        <Link to={{
                            pathname: "/flightConfirm",
                            search: `?id=${flight.id}&traveler=1`
                            // hash: "#the-hash",
                            // state: { fromDashboard: true }
                        }}><button className='btnSelectFlight shadow-sm rounded-3 fw-bold px-3 py-1'>เลือกเที่ยวบิน</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
Flightbox.propTypes = {
    flight: PropTypes.object.isRequired
};

export default Flightbox;