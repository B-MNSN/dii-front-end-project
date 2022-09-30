import OptionalReturn from "./OptionalReturn";
import { Link } from 'react-router-dom';

function PriceDetails({ flight }) {
  let traveler = new URLSearchParams(window.location.search).get("traveler");
  let price = flight?.price;
  let tax = Math.ceil(traveler * price * 0.07);
  let totalPrice = price + tax;
  return (
    <>
      <div className="row priceDetails bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4">
        <div className="col mx-4 mt-4 border-bottom border-dark border-1">
          <h5 className="fw-bolder">
            รายละเอียด
          </h5>
        </div>
        <div className="col-11 mx-4 mt-3">
          <div className="col d-flex justify-content-between">
            <h6 className="fw-bold my-1">เที่ยวบินขาออก</h6>
            <p className="fw-bold my-1">฿{flight?.price}</p>
          </div>
          <ul className="col p-0 ms-3">
            <li className="my-2 d-flex justify-content-between">
              <text>ผู้ใหญ่x{traveler}</text>
              <text className="">{price}</text>
            </li>
            <li className="my-2 d-flex justify-content-between">
              <text>ภาษี</text>
              <text className="">{tax}</text>
            </li>
            <li className="my-2 d-flex justify-content-between">
              <text>ส่วนลด</text>
              <text className="">-</text>
            </li>
          </ul>
        </div>
        <OptionalReturn flight={flight} />
        <div className="col mx-4 mb-4 mt-2 d-flex justify-content-between border-top border-dark border-1">
          <h5 className="fw-bolder">ราคารวม</h5>
          <text>฿{totalPrice}</text>
        </div>
      </div>
      <div className="mt-3">
        < Link to={{
          pathname: "/addDataUser",
          search: `?id=${flight.id}`
          // hash: "#the-hash",
          // state: { fromDashboard: true }
        }}><button className="btnbooking shadow-sm rounded-3 fw-bold py-2 w-100">
            ดำเนินการต่อ
          </button></Link>

      </div>

    </>
  );
}

export default PriceDetails;
