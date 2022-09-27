import MyFlight from '../components/MyFlight';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import MyFlightDetails from '../components/MyFlightDetails';
import PriceDetails from '../components/PriceDetails';

function FlightConfirm(){
    return(
        <>
            <Navbar/>
            <Container>
              <MyFlight/>
              <div className='d-flex justify-content-center w-75'>
                <div className='row '>
                    <div className='col-lg-8'>
                        <MyFlightDetails />  
                    </div>
                    <div className='col'>
                        <PriceDetails/> 
                    </div>
                </div>
              </div>
            </Container>
            
        </>
    );
};

export default FlightConfirm;