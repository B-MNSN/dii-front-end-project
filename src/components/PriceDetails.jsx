function PriceDetails(){
    return (
        <>
            <div>
                <div>
                    <div className="priceDetails bg-secondary bg-opacity-10 shadow-lg border border-1 mt-5 rounded-4">
                        <div className="mx-5 mt-4">
                            <h4 className='fw-bolder border-bottom border-dark border-2'>รายละเอียด</h4>
                        </div>
                        <div className="mx-5 mt-3">
                            <div className="d-flex justify-content-between">
                                <h5 className="fw-bold my-1">เที่ยวบินขาออก</h5>
                                <p className="fw-bold my-1">฿1,000</p>
                            </div>
                            <div>
                                <ul className="p-0 ms-3">
                                    <li className="my-2 d-flex justify-content-between">
                                        <text>ผู้ใหญ่x1</text>
                                        <text>฿1,000</text>
                                    </li>
                                    <li className="my-2 d-flex justify-content-between">
                                        <text>ภาษี</text>
                                        <text>฿500</text>
                                    </li>
                                    <li className="my-2 d-flex justify-content-between">
                                        <text>ส่วนลด</text>
                                        <text>-</text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mx-5 mb-4 d-flex justify-content-between border-top border-dark border-2">
                            <h5 className='fw-bolder'>ราคารวม</h5>
                            <text>฿5,000</text>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PriceDetails;