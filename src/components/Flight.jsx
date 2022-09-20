import { TbPlaneDeparture } from 'react-icons/tb';
import { TbPlaneArrival } from 'react-icons/tb';
import { useState } from 'react';
import ChangeFlight from './ChangeFlight';
function Flight(){
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-between rounded-4">
                <div className='d-flex align-items-center m-5'>
                    <div className="departureFlight d-flex">
                        <TbPlaneDeparture size='50' className='me-3' color='#02457A'/>
                        <div className='mx-3'>
                            <h3 className='fw-bolder'>เที่ยวบินขาออก</h3>
                            <p>BKKA-CNX | day, date/mm</p>
                        </div>
                        

                    </div>
                    <div className="arrivalFlight d-flex ms-5">
                        <TbPlaneArrival size='50' className='me-3' color='#02457A'/>
                        <div className='mx-3'>
                            <h3 className='fw-bolder'>เที่ยวบินขาเข้า</h3>
                            <p>BKKA-CNX | day, date/mm</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end align-items-center me-5'>
                    <button className='btnChangeFlight shadow-sm rounded-3 fw-bold px-4 py-2' onClick={() => setModalShow(true)}>Change Flight</button>
                </div>
                
            </div>
            <ChangeFlight show={modalShow} onHide={() => setModalShow(false)}/> 
        </>
    )
}

export default Flight;