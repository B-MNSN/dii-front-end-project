import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { RiLuggageDepositLine } from 'react-icons/ri';

function Flightbox({ item }) {
    return (
        <>



            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 rounded-4">
                <div className='row d-flex align-items-center justify-content-center m-4'>
                    <div className='col-md-2 d-flex justify-content-center'>
                        <img src={item.imgURLlogo} alt='air-asia-flight' className='picFlight img-fluid' width={150} />
                    </div>
                    <div className='col-md-3 d-flex align-items-center'>
                        <div className='col'>
                            <p>{item.departTime}</p>
                            <p>{item.departLocate}</p>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <FaArrowRight />
                        </div>
                        <div className='col'>
                            <p>{item.landTime}</p>
                            <p>{item.landLocate}</p>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <p>{item.duration}</p>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <RiLuggageDepositLine size='30' color='#02457A' className='' />
                        <p>10 ก.ม</p>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <p>{`฿${item.price}/คน `}</p>
                    </div>
                    <div className='col-md-3 d-flex justify-content-center'>
                        <button className='btnSelectFlight shadow-sm rounded-3 fw-bold px-3 py-1'>เลือกเที่ยวบิน</button>
                    </div>
                </div>
            </div>
        </>
    );
}
Flightbox.propTypes = {
    item: PropTypes.object.isRequired
};

export default Flightbox;