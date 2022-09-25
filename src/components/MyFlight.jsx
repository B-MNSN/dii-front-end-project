import { TbPlaneDeparture } from 'react-icons/tb';
import { TbPlaneArrival } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';

function MyFLight(){
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-center rounded-4">
                <div className='row d-flex align-items-center m-4'>
                    <div className="departureFlight col d-flex">
                        <TbPlaneDeparture size='40' className='me-3' color='#02457A'/>
                        <div className='col-md'>
                            <h5 className='fw-bolder'>กรุงเทพ <BsArrowRightShort/> เชียงใหม่</h5>
                            <p>กรุงเทพ (BKK) <BsArrowRightShort/> เชียงใหม่ (CNX ) | day, date/mm | ผู้ใหญ่ 1 | Economy</p>
                        </div>
                    </div>
                    <div className="arrivalFlight col d-flex">
                        <TbPlaneArrival size='40' className='me-3' color='#02457A'/>
                        <div className='col-md'>
                            <h5 className='fw-bolder'>เชียงใหม่ <BsArrowRightShort/> กรุงเทพ</h5>
                            <p>เชียงใหม่ (CNX) <BsArrowRightShort/> กรุงเทพ (BKK) | day, date/mm | ผู้ใหญ่ 1 | Economy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default MyFLight;