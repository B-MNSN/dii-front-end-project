import React from "react";
import EditButton from "./EditButton";

   
export default function MyBooking() {
    return(
    <>
    <div class="shadow-lg p-5 mb-20 bg-gray rounded">
    <h5 style={{color: "gray"}}>Booking code: <strong style={{color: "black"}}>DII642110XXX</strong> </h5>
    <EditButton />
    <h5><strong>Passenger Information</strong></h5>
    <blockquote class="blockquote1">
        <p class="mb-2">Mrs Elsa Frozen</p>
         <footer class="blockquote-footer">Ticket Number: 123456789</footer>
    </blockquote>
    <h5><strong>Contact Information</strong></h5>
    <blockquote class="blockquote2">
        <p class="mb-2" style={{color: "gray"}}><small>Full Name</small> </p>
         <footer class="blockquote-footer" style={{color: "black"}}>Mrs Elsa Frozen</footer>
         <p class="mb-2" style={{color: "gray"}}><small>E-mail Address</small> </p>
         <footer class="blockquote-footer" style={{color: "black"}}>elsa_frozen@email.com</footer>
         <p class="mb-2" style={{color: "gray"}}><small>Phone Number</small></p>
         <footer class="blockquote-footer" style={{color: "black"}}>+66(0) 89-789-1234</footer>
    </blockquote>
    
    </div>
    </>
    )
}