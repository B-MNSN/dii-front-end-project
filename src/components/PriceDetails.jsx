import OptionalReturn from "./OptionalReturn";
function PriceDetails({ books }) {
  return (
    <>
      <div className="row priceDetails bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4 w-100">
        <div className="col mx-4 mt-4 border-bottom border-dark border-2">
          <h5 className="fw-bolder">
            รายละเอียด
          </h5>
        </div>
        <div className="col-11 mx-4 mt-3">
          <div className="col d-flex justify-content-between">
            <h6 className="fw-bold my-1">เที่ยวบินขาออก</h6>
            <p className="fw-bold my-1">฿{books.depart?.price}</p>
          </div>
          <ul className="col p-0 ms-3">
            <li className="my-2 d-flex justify-content-between">
              <text>ผู้ใหญ่x{books.traveler}</text>
              <text className="">{books.traveler * books.depart?.price}</text>
            </li>
            <li className="my-2 d-flex justify-content-between">
              <text>ภาษี</text>
              <text className="">-</text>
            </li>
            <li className="my-2 d-flex justify-content-between">
              <text>ส่วนลด</text>
              <text className="">-</text>
            </li>
          </ul>
        </div>
        <OptionalReturn books={books} />
        <div className="col mx-4 mb-4 d-flex justify-content-between border-top border-dark border-2">
          <h5 className="fw-bolder">ราคารวม</h5>
          <text>฿{books.totalPrice}</text>
        </div>
      </div>
      <div className="mt-3">
        <button className="btnbooking shadow-sm rounded-3 fw-bold py-2 w-100">
          ดำเนินการต่อ
        </button>
      </div>
      { }
    </>
  );
}

export default PriceDetails;
