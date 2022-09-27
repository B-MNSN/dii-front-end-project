function OptionalReturn({ books }) {
    if (books.return) {
        return (<div className="col-11 mx-4 mt-3">
            <div className="col d-flex justify-content-between">
                <h6 className="fw-bold my-1">เที่ยวบินขากลับ</h6>
                <p className="fw-bold my-1">฿{books.return?.price}</p>
            </div>
            <ul className="col p-0 ms-3">
                <li className="my-2 d-flex justify-content-between">
                    <text>ผู้ใหญ่x{books.traveler}</text>
                    <text className="">{books.traveler * books.return?.price}</text>
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