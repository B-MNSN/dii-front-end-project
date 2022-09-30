import { TbPlaneDeparture } from 'react-icons/tb';
import { TbPlaneArrival } from 'react-icons/tb';
import { useState } from 'react';
import ChangeFlight from './ChangeFlight';
function Flight({ setTemp }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>

            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 rounded-4">
                <div className='row m-5 d-flex align-items-center'>
                    <div className="col departureFlight d-flex">
                        <TbPlaneDeparture size='50' className='me-3' color='#02457A' />
                        <div className='col'>
                            <h5 className='fw-bolder'>เที่ยวบินขาออก</h5>
                            <p>BKKA-CNX | day, date/mm</p>
                        </div>
                    </div>
                    <div className="col arrivalFlight d-flex ">
                        <TbPlaneArrival size='50' className='me-3' color='#02457A' />
                        <div className='col'>
                            <h5 className='fw-bolder'>เที่ยวบินขาเข้า</h5>
                            <p>BKKA-CNX | day, date/mm</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='d-flex justify-content-center '>
                            <button href='/changeFlight' className='btnChangeFlight shadow-sm rounded-3 fw-bold px-4 py-2' onClick={() => setModalShow(true)}>Change Flight</button>
                        </div>
                    </div>

                </div>

            </div>
            <ChangeFlight setTemp={setTemp} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Flight;