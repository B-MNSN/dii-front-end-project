import { FaArrowRight } from 'react-icons/fa';
import { RiLuggageDepositLine } from 'react-icons/ri';
import airAsiaFlight from '../air-asia.png';

function CardSelectFlight() {
    return (
        <>
            <div className="bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 w-75 d-flex justify-content-center rounded-4">
                <div className='d-flex align-items-center'>
                    <img src={airAsiaFlight} alt='air-asia-flight' className='w-25'/>
                    <div>
                        <p>06:15</p>
                        <p>CNX</p>  
                    </div>
                    <FaArrowRight/>
                    <div>
                        <p>07:30</p>
                        <p>CNX</p>  
                    </div>
                    <div>
                        <RiLuggageDepositLine>10 KM</RiLuggageDepositLine>
                    </div>
                    <div>
                        <p>฿777/คน</p>
                    </div>
                    <button>เลือกเที่ยวบิน</button>
                </div>
            </div>
        </>
    )
}

export default CardSelectFlight;