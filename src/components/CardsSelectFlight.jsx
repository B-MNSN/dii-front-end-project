import { FaArrowRight } from 'react-icons/fa';
import { RiLuggageDepositLine } from 'react-icons/ri';
import airAsiaFlight from '../Elements/air-asia.png';

function CardSelectFlight() {
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-between rounded-4">
                <div className='d-flex align-items-center justify-content-between'>
                    <img src={airAsiaFlight} alt='air-asia-flight' className='picFlight'/>
                    <div className='mx-3'>
                        <p>06:15</p>
                        <p>BKKA</p>  
                    </div>
                    <FaArrowRight size='25' />
                    <div className='mx-3'>
                        <p>07:30</p>
                        <p>CNX</p>  
                    </div>
                    <div className='mx-3'>
                        <p>1h 15m</p>
                    </div>
                    
                    <div className='mx-5 d-flex'> 
                        <RiLuggageDepositLine size='30' color='#02457A' className='me-3'/>
                        <p>10 ก.ม</p>
                    </div>
                    <div className='ms-3 me-2'>
                        <p>฿777/คน</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end align-items-center me-5'>
                    <button className='btnSelectFlight shadow-sm rounded-3 fw-bold px-3 py-1'>เลือกเที่ยวบิน</button>
                </div>
            </div>
        </>
    )
}

export default CardSelectFlight;