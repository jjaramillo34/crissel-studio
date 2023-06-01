import React from "react";
import { InlineWidget } from "react-calendly";

const BookingForm = () => {
    return (
        <section className="booking-form">
            <div className="section-header">
                <div className="container">
                    <div className="row">
                        <img src="assets/images/booking-form-header-img.png" alt="booking form"/>
                        <h1>Booking Date and Time</h1>
                    </div>
                </div>
            </div>
        
            <div className="section-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="booking-form-content">
                                <h2>Book an Appointment</h2>
                                <p>Book an appointment with us today by clicking the button below.</p>
                                <InlineWidget url="https://calendly.com/jjaramillo34/15min" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
                        
    )
    }


export default BookingForm
