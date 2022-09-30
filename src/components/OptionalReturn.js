function OptionalReturn({ flight }) {
    if (flight.return?.price) {
        return (<div className="col-11 mx-4 mt-3">
            <div className="col d-flex justify-content-between">
                <h6 className="fw-bold my-1">เที่ยวบินขากลับ</h6>
                <p className="fw-bold my-1">฿{flight.return?.price}</p>
            </div>
            <ul className="col p-0 ms-3">
                <li className="my-2 d-flex justify-content-between">
                    <text>ผู้ใหญ่x{flight.traveler}</text>
                    <text className="">{flight.traveler * flight.return?.price}</text>
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
        </div>);
    }
}

export default OptionalReturn;