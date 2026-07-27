"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {FaUser,FaEnvelope,FaPhone,FaCheck,} from "react-icons/fa";
import "./Booking.css";

export default function Booking() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkInRef = useRef();

  const [backendBooking, setBackendBooking] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [bookingData, setBookingData] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    paymentChoice: "",
    paymentProof: null,
  });

  const [bookingStatus, setBookingStatus] =
    useState("");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const rooms = useMemo(
    () => ({
      deluxe: {
        name: "Deluxe Room",
        price: 150000,
      },

      executive: {
        name: "Executive Room",
        price: 180000,
      },

      suite: {
        name: "Luxury Suite",
        price: 300000,
      },
    }),
    []
  );

const WEEKEND_DISCOUNT = 0.30;

const PROMOTION_END = new Date("2026-12-31T23:59:59");

const ELIGIBLE_ROOMS = [
  "deluxe",
  "executive",
];

  useEffect(() => {
    const roomType =
      searchParams.get("room");

    if (roomType && rooms[roomType]) {
      setBookingData((prev) => ({
        ...prev,
        roomType,
      }));
    }
  }, [searchParams, rooms]);

  // Returns true if promotion is still active
const isPromotionActive = () => {
  return new Date() <= PROMOTION_END;
};


// Friday = 5
// Saturday = 6
// Sunday = 0
const isWeekendNight = (date) => {
  const day = date.getDay();

  return day === 5 || day === 6 || day === 0;
};


// Currency formatter
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
};

  // const calculateTotal = () => {
  //   if (
  //     !bookingData.checkIn ||
  //     !bookingData.checkOut ||
  //     !bookingData.roomType
  //   )
  //     return 0;

  //   const checkIn = new Date(
  //     bookingData.checkIn
  //   );

  //   const checkOut = new Date(
  //     bookingData.checkOut
  //   );

  //   const nights = Math.ceil(
  //     (checkOut - checkIn) /
  //       (1000 * 60 * 60 * 24)
  //   );

  //   const roomPrice =
  //     rooms[bookingData.roomType]?.price || 0;

  //   return nights * roomPrice;
  // };

  const calculateTotal = () => {

  if (
    !bookingData.checkIn ||
    !bookingData.checkOut ||
    !bookingData.roomType
  ) {

    return {

      subtotal: 0,
      discount: 0,
      total: 0,
      weekendNights: 0,
      regularNights: 0,
      promotionApplied: false

    };

  }


  const room = rooms[bookingData.roomType];

  if (!room) {

    return {

      subtotal: 0,
      discount: 0,
      total: 0,
      weekendNights: 0,
      regularNights: 0,
      promotionApplied: false

    };

  }


  const roomPrice = room.price;

  let subtotal = 0;

  let discount = 0;

  let weekendNights = 0;

  let regularNights = 0;


  let current = new Date(bookingData.checkIn);

  const checkout = new Date(bookingData.checkOut);


  while (current < checkout) {

    subtotal += roomPrice;


    const eligibleRoom =
      ELIGIBLE_ROOMS.includes(
        bookingData.roomType
      );


    if (
      eligibleRoom &&
      isPromotionActive() &&
      isWeekendNight(current)
    ) {

      discount += roomPrice * WEEKEND_DISCOUNT;

      weekendNights++;

    } else {
      regularNights++;
    }
    current.setDate(
      current.getDate() + 1
    );
  }
  return {

    subtotal,
    discount,
    total: subtotal - discount,
    weekendNights,
    regularNights,
    promotionApplied:
      discount > 0
  };
};

const pricing = calculateTotal();

  const handleInputChange = (e) => {
    const {
      name,
      value,
      type,
    } = e.target;

    if (type === "file") {
      setBookingData((prev) => ({
        ...prev,
        [name]: e.target.files[0],
      }));
    } else {
      setBookingData((prev) => ({
        ...prev,
        [name]:
          type === "number"
            ? parseInt(value) || 0
            : value,
      }));
    }
  };

  const handleStep1Next = (e) => {
    e.preventDefault();

    if (
      bookingData.roomType &&
      bookingData.checkIn &&
      bookingData.checkOut
    ) {
      setCurrentStep(2);
    }
  };

  const handleStep2Next = (e) => {
    e.preventDefault();

    if (
      bookingData.firstName &&
      bookingData.lastName &&
      bookingData.email &&
      bookingData.phone
    ) {
      setCurrentStep(3);
    }
  };

  const handleBookingSubmit = async (e) => {e.preventDefault();
    setIsLoading(true);
    const setTimeTo1230PM = (
      dateString
    ) => {
      const date = new Date(
        dateString
      );

      date.setHours(12,30,0,0);
      return date.toISOString();
    };

    const checkInAt1230 =
      setTimeTo1230PM(
        bookingData.checkIn
      );

    const checkOutAt1230 =
      setTimeTo1230PM(
        bookingData.checkOut
      );

    try {
      const formData =
        new FormData();

      formData.append(
        "roomType",
        bookingData.roomType
      );

      formData.append(
        "checkIn",
        checkInAt1230
      );

      formData.append(
        "checkOut",
        checkOutAt1230
      );

      formData.append(
        "guests",
        bookingData.guests
      );

      formData.append(
        "firstName",
        bookingData.firstName
      );

      formData.append(
        "lastName",
        bookingData.lastName
      );

      formData.append(
        "email",
        bookingData.email
      );

      formData.append(
        "phone",
        bookingData.phone
      );

      formData.append(
        "specialRequests",
        bookingData.specialRequests
      );

      formData.append(
        "paymentChoice",
        bookingData.paymentChoice
      );

     // Pricing Information
formData.append(
  "subtotal",
  pricing.subtotal
);

formData.append(
  "discount",
  pricing.discount
);

formData.append(
  "total",
  pricing.total
);

formData.append(
  "promotion",
  pricing.promotionApplied
    ? "Weekend Special 30%"
    : "None"
);

formData.append(
  "weekendNights",
  pricing.weekendNights
);

formData.append(
  "regularNights",
  pricing.regularNights
);

      if (
        bookingData.paymentProof
      ) {
        formData.append(
          "paymentProof",
          bookingData.paymentProof
        );
      }

      const res = await fetch(
        "https://tulipbackend.onrender.com/api/bookings",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(
          `Booking failed (${res.status})`
        );
      }

      let data = null;

      const contentType =
        res.headers.get(
          "content-type"
        );

      if (
        contentType &&
        contentType.includes(
          "application/json"
        )
      ) {
        data = await res.json();
      }

      const bookingPayload =

data?.booking

? {

    bookingReference:
        data.booking.reference,

    status:
        data.booking.status,

    subtotal:
        pricing.subtotal,

    discount:
        pricing.discount,

    total:
        pricing.total,

    promotion:
        pricing.promotionApplied
            ? "Weekend Special 30%"
            : null,

    roomType:
        rooms[
            bookingData.roomType
        ]?.name,

    checkIn:
        checkInAt1230,

    checkOut:
        checkOutAt1230

}

: {

    bookingReference:
        "Pending",

    subtotal:
        pricing.subtotal,

    discount:
        pricing.discount,

    total:
        pricing.total,

    promotion:
        pricing.promotionApplied
            ? "Weekend Special 30%"
            : null,

    roomType:
        rooms[
            bookingData.roomType
        ]?.name,

    checkIn:
        checkInAt1230,

    checkOut:
        checkOutAt1230

};

        data?.booking
          ? {
              bookingReference:
                data.booking
                  .reference,

              status:
                data.booking
                  .status,

              subtotal: pricing.subtotal,
              discount: pricing.discount,
              total: pricing.total,
              promotion: pricing.promotionApplied
              ? "Weekend Special 30%" : null,
              roomType:
                rooms[
                  bookingData
                    .roomType
                ]?.name,

              checkIn:
                checkInAt1230,

              checkOut:
                checkOutAt1230,
            }
          : {
              bookingReference:
                "Pending",

              // total:
                // calculateTotal(),pricing.total,
                subtotal: pricing.subtotal,
                discount: pricing.discount,
                total: pricing.total,

promotion: pricing.promotionApplied
    ? "Weekend Special 30%"
    : null,
              roomType:
                rooms[
                  bookingData
                    .roomType
                ]?.name,

              checkIn:
                checkInAt1230,

              checkOut:
                checkOutAt1230,
            };

      setBackendBooking(
        bookingPayload
      );

      setBookingStatus(
        bookingPayload.status ||
          "pending"
      );

      setCurrentStep(4);
    } catch (error) {
      console.error(error);

      router.push(
        "/booking-error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (
    dateString
  ) => {
    return new Date(
      dateString
    ).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (

    <>
    <div className="booking">
      <section className="booking-hero">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="hero-content text-center"
          >
            <h1>
              Book Your Stay
            </h1>

            <p>
              Reserve your luxury
              accommodation today
            </p>
          </motion.div>
        </div>
      </section>




          <section className="section booking-steps-section">
        <div className="container">
          <div className="booking-steps">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`step ${currentStep >= step ? 'completed' : ''} ${currentStep === step ? 'active' : ''}`}
              >
                <div className="step-number">
                  {currentStep > step ? <FaCheck /> : step}
                </div>
                <div className="step-label">
                  {step === 1 && 'Room Selection'}
                  {step === 2 && 'Guest Details'}
                  {step === 3 && 'Payment'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL YOUR EXISTING STEP 1, STEP 2,
          STEP 3 AND CONFIRMATION JSX
          CAN BE COPIED EXACTLY FROM
          YOUR REACT FILE BELOW THIS
          POINT */}
                <section className="section booking-form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="booking-form-container"
          >
            {currentStep === 1 && (
              <form className="booking-form" onSubmit={handleStep1Next}>
                <h3>Step 1: Room Selection</h3>

                <div className="form-group">
                  <label htmlFor="roomType">Room Type *</label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={bookingData.roomType}
                    onChange={handleInputChange}
                    required
                    className="form-control">
                    <option value="">Select a room type</option>
                    {Object.entries(rooms).map(([key, room]) => (
                      <option key={key} value={key}>
                        {/* {room.name} - ₦{room.price}/night */}
                        <>
    {room.name}

    {["deluxe","executive"].includes(key) &&

        " ⭐ Weekend 30% OFF"}

    {" - "}

    ₦{room.price.toLocaleString()}/night
</>
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in Date *</label>
                    <div className="input-with-icon">
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        min={new Date().toISOString().split('T')[0]}
                         ref={checkInRef} />
                        {/* <FaCalendarAlt onClick={() => checkInRef.current.showPicker()} className="input-icon" /> */}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out Date *</label>
                     <div className="input-with-icon">
                      {/* <FaCalendarAlt className="input-icon" /> */}
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        min={bookingData.checkIn}
                        ref={checkInRef}  />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    required
                    className="form-control">
                    {[1, 2, 3].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" onClick={scrollToTop} className="btn btn-primary">
                  Continue to Guest Details
                </button>
              </form>
            )}

            {currentStep === 2 && (
              <form className="booking-form" onSubmit={handleStep2Next}>
                <h3>Step 2: Guest Information</h3>
                 <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                     <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your first name"/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <div className="input-with-icon">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="input-with-icon">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests (Optional)</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-control"
                    placeholder="Any special requests or requirements?"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                  <button type="submit" onClick={scrollToTop} className="btn btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {currentStep === 3 && (
              <form className="booking-form" onSubmit={handleBookingSubmit}>
                <h3>Step 3: Payment</h3>

                {/* Booking Summary */}
                {/* <div className="booking-summary">
                  <h4>Booking Summary</h4>
                  <div className="summary-item"><span>Room Type:</span><strong>{rooms[bookingData.roomType]?.name}</strong></div>
                  <div className="summary-item"><span>Check-in:</span><strong>{formatDate(bookingData.checkIn)} at 12:30 PM</strong></div>
                  <div className="summary-item"><span>Check-out:</span><strong>{formatDate(bookingData.checkOut)} at 12:30 PM</strong></div>
                  <div className="summary-item"><span>Guests:</span><strong>{bookingData.guests}</strong></div>
                  <div className="summary-total"><span>Total Amount:</span><strong>₦{calculateTotal()}</strong></div>
                </div> */}

                <div className="booking-summary">

    <h4>Booking Summary</h4>
    {pricing.promotionApplied && (
        <div className="weekend-offer">
            🎉 Weekend Special Applied
            <span>
                Save 30% on Friday, Saturday & Sunday Nights
            </span>
        </div>
    )}
    <div className="summary-item">
        <span>Room</span>
        <strong>
            {rooms[bookingData.roomType]?.name}
        </strong>
    </div>
    <div className="summary-item">
        <span>Check-in</span>
        <strong>
            {formatDate(bookingData.checkIn)}
        </strong>
    </div>
    <div className="summary-item">
        <span>Check-out</span>
        <strong>
            {formatDate(bookingData.checkOut)}
        </strong>
    </div>
    <div className="summary-item">
        <span>Guests</span>
        <strong>
            {bookingData.guests}
        </strong>
    </div>
    <hr />
    <div className="summary-item">
        <span>Original Price</span>
        <strong>
            {formatCurrency(pricing.subtotal)}
        </strong>
    </div>

    {pricing.promotionApplied && (

        <>
            <div className="summary-item">
                <span>
                    Weekend Discount (30%)
                </span>
                <strong className="discount-price">
                    - {formatCurrency(pricing.discount)}
                </strong>
            </div>
            <div className="summary-item">
                <span>
                    Discounted Nights
                </span>
                <strong>
                    {pricing.weekendNights}
                </strong>
            </div>
        </>
    )}
    <div className="summary-total">
        <span>
            Total Payable
        </span>
        <strong>
            {formatCurrency(pricing.total)}
        </strong>
    </div>
</div>

                {/* Payment Choice */}
                <div className="form-group">
                  <label>Choose Payment Option *</label>
                  <div className="radio-group">
                
                    <label>
                      <input
                        type="radio"
                        name="paymentChoice"
                        value="arrival"
                        checked={bookingData.paymentChoice === 'arrival'}
                        onChange={handleInputChange}
                      /> Pay on Arrival
                    </label>
                  </div>
                </div>

                {bookingData.paymentChoice === 'deposit' && (
                  <div className="bank-details">
                    <h4>Bank Transfer Details</h4>
                    <p><strong>Bank Name:</strong> Fidelity Bank</p>
                    <p><strong>Account Name:</strong> Airport Golden Tulip Hotel</p>
                    <p><strong>Account Number:</strong> 5600466615 </p>
                    <p className="payment-note">Upload your payment proof after transfer. Preferred file format: PDF.</p>

                    <div className="form-group file-upload">
                      <label htmlFor="paymentProof">Upload Payment Proof *</label>
                      <input
                        type="file"
                        id="paymentProof"
                        name="paymentProof"
                        onChange={handleInputChange}
                        required
                      />
                      <small>Your payment will be verified as soon as Possible.</small>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" onClick={() => { scrollToTop(); setCurrentStep(2)}} className="btn btn-outline">Back</button>
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Complete Booking'}
                  </button>
                </div>
              </form>
            )}
            {currentStep === 4 && (
  <div className="booking-confirmation">

    <div className="confirmation-icon">
      <FaCheck />
    </div>

    {bookingStatus === 'confirmed' ? (
      <>
        <h3>🎉 Your Reservation Is Confirmed</h3>
        <p>Thank you for choosing Airport Golden Tulip Hotel.</p>
        <p>You chose to pay on arrival.</p>
        {backendBooking.discount>0 &&(

<div className="saving-box">

You Saved 

<strong>

{formatCurrency(
 backendBooking.discount
)}

</strong>

with our Weekend Special.

</div>

)}
      </>
    ) : (
      <>
        <h3>Booking Pending Verification</h3>
        <p>We’ve received your booking and payment proof.</p>
        <p>You will receive an email once your payment is confirmed.</p>
      </>
    )}

    <div className="confirmation-details">

      <div className="detail-item">
        <span>Booking Reference:</span>
        <strong>{backendBooking?.bookingReference || "Processing..."}</strong>

      </div>

      {/* <div className="detail-item">
        <span>Total Amount:</span>
        <strong>₦{backendBooking?.total}</strong>
      </div> */}
      <div className="detail-item">

    <span>Original Price</span>

    <strong>

        {formatCurrency(
            backendBooking?.subtotal || 0
        )}

    </strong>

</div>

{backendBooking?.discount > 0 && (

<div className="detail-item">

    <span>

        Weekend Discount

    </span>

    <strong
        className="discount-price"
    >

        - {formatCurrency(
            backendBooking.discount
        )}

    </strong>

</div>

)}

<div className="detail-item">

    <span>

        Total Paid

    </span>

    <strong>

        {formatCurrency(
            backendBooking?.total || 0
        )}

    </strong>

</div>

      <div className="detail-item">
        <span>Room Type:</span>
        <strong>{backendBooking?.roomType}</strong>
      </div>

      <div className="detail-item">
        <span>Check-in:</span>
        <strong>{new Date(backendBooking?.checkIn).toLocaleDateString()}</strong>
      </div>

      <div className="detail-item">
        <span>Check-out:</span>
        <strong>{new Date(backendBooking?.checkOut).toLocaleDateString()}</strong>
      </div>

    </div>

    <div className="confirmation-actions">
      <button
        // onClick={() => { scrollToTop(); navigate('/')}}
        onClick={() => {scrollToTop(); router.push("/");}}
        className="btn btn-primary">
        Return to Home
      </button>
    </div>
  </div>
)}

          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}