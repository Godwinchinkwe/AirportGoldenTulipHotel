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
    numberOfRooms: 1,
    guestsPerRoom: [1],
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

    // Each selected room is charged at the room's nightly price.
    subtotal += roomPrice * bookingData.numberOfRooms;


    const eligibleRoom =
      ELIGIBLE_ROOMS.includes(
        bookingData.roomType
      );


    if (
      eligibleRoom &&
      isPromotionActive() &&
      isWeekendNight(current)
    ) {

      // Weekend discount applies to every selected room.
      discount +=
        roomPrice *
        WEEKEND_DISCOUNT *
        bookingData.numberOfRooms;

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

  // Update the number of rooms and create one guest selector for each room.
  const handleRoomCountChange = (value) => {
    const count = Math.max(1, Math.min(10, Number(value) || 1));

    setBookingData((prev) => {
      const guestsPerRoom = Array.from(
        { length: count },
        (_, index) => prev.guestsPerRoom[index] || 1
      );

      return {
        ...prev,
        numberOfRooms: count,
        guestsPerRoom,
        guests: guestsPerRoom.reduce((sum, guests) => sum + guests, 0),
      };
    });
  };

  const handleGuestsPerRoomChange = (roomIndex, value) => {
    const guests = Math.max(1, Math.min(6, parseInt(value, 10) || 1));

    setBookingData((prev) => {
      const updatedGuests = [...prev.guestsPerRoom];
      updatedGuests[roomIndex] = guests;

      return {
        ...prev,
        guestsPerRoom: updatedGuests,
        guests: updatedGuests.reduce((sum, roomGuests) => sum + roomGuests, 0),
      };
    });
  };

  const totalGuests = bookingData.guestsPerRoom.reduce(
    (sum, guests) => sum + guests,
    0
  );

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
        totalGuests
      );

      formData.append(
        "numberOfRooms",
        bookingData.numberOfRooms
      );

      formData.append(
        "guestsPerRoom",
        JSON.stringify(bookingData.guestsPerRoom)
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

      // if (!res.ok) {
      //   throw new Error(
      //     `Booking failed (${res.status})`
      //   );
      // }

      if (!res.ok) {
  const errorText = await res.text();

  console.error("BOOKING API ERROR:", {
    status: res.status,
    response: errorText,
  });

  throw new Error(
    `Booking failed (${res.status}): ${errorText}`
  );
}

// let data = null;

const contentType = res.headers.get("content-type");

if (!contentType?.includes("application/json")) {
  throw new Error("The booking server returned an invalid response.");
}

const data = await res.json();

console.log("BOOKING SUCCESS RESPONSE:", data);

if (!data.success || !data.booking) {
  throw new Error("Booking was not successfully created.");
}

const bookingPayload = {
  bookingReference: data.booking.bookingReference,
  status: data.booking.status || "confirmed",
  subtotal: pricing.subtotal,
  discount: pricing.discount,
  total: pricing.total,
  promotion: pricing.promotionApplied
    ? "Weekend Special 30%"
    : null,
  roomType: rooms[bookingData.roomType]?.name,
  checkIn: checkInAt1230,
  checkOut: checkOutAt1230,
  numberOfRooms: bookingData.numberOfRooms,
  guestsPerRoom: bookingData.guestsPerRoom,
};

setBackendBooking(bookingPayload);
setBookingStatus(bookingPayload.status ||"pending");
setCurrentStep(4);

// const contentType =
//         res.headers.get(
//           "content-type"
//         );

//       if (
//         contentType &&
//         contentType.includes(
//           "application/json"
//         )
//       ) {
//         data = await res.json();
//       }

//         data?.booking
//           ? {
//               bookingReference:
//                 data.booking
//                   .reference,

//               status:
//                 data.booking
//                   .status,

//               subtotal: pricing.subtotal,
//               discount: pricing.discount,
//               total: pricing.total,
//               promotion: pricing.promotionApplied
//               ? "Weekend Special 30%" : null,
//               roomType:
//                 rooms[
//                   bookingData
//                     .roomType
//                 ]?.name,

//               checkIn:
//                 checkInAt1230,

//               checkOut:
//                 checkOutAt1230,
//             }
//           : {
//               bookingReference:
//                 "Pending",

              // total:
                // calculateTotal(),pricing.total,
//                 subtotal: pricing.subtotal,
//                 discount: pricing.discount,
//                 total: pricing.total,

// promotion: pricing.promotionApplied
//     ? "Weekend Special 30%"
//     : null,
//               roomType:
//                 rooms[
//                   bookingData
//                     .roomType
//                 ]?.name,

//               checkIn:
//                 checkInAt1230,

//               checkOut:
//                 checkOutAt1230,
//             };

//       setBackendBooking(bookingPayload);

//       setBookingStatus(bookingPayload.status ||"pending" );

//       setCurrentStep(4);


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
   
    <section className="section booking-form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="booking-form-container">

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
                        ref={checkInRef} />
                    </div>
                  </div>
                </div>

                <div className="room-selection-panel">
                  <div className="room-selection-heading">
                    <div>
                      <span className="room-selection-eyebrow">YOUR STAY</span>
                      <h4>How many rooms do you need?</h4>
                      <p>Choose up to 10 rooms. You can set the guests for each room below.</p>
                    </div>
                    <div className="room-count-summary" aria-live="polite">
                      <span className="room-count-number">{bookingData.numberOfRooms}</span>
                      <span>{bookingData.numberOfRooms === 1 ? "Room" : "Rooms"}</span>
                    </div>
                  </div>

                  <div className="room-quantity-control">
                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() => handleRoomCountChange(bookingData.numberOfRooms - 1)}
                      disabled={bookingData.numberOfRooms <= 1}
                      aria-label="Decrease number of rooms"
                    >
                      −
                    </button>

                    <div className="quantity-value" aria-live="polite">
                      <strong>{bookingData.numberOfRooms}</strong>
                      <span>{bookingData.numberOfRooms === 1 ? "Room" : "Rooms"}</span>
                    </div>

                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() => handleRoomCountChange(bookingData.numberOfRooms + 1)}
                      disabled={bookingData.numberOfRooms >= 10}
                      aria-label="Increase number of rooms"
                    >
                      +
                    </button>
                  </div>

                  <div className="room-limit-note">
                    <span>Maximum 10 rooms</span>
                    <span>•</span>
                    <span>1–2 guests per room</span>
                  </div>
                </div>

                <div className="guests-per-room">
                  <div className="guests-per-room-header">
                    <div>
                      <label>Guests Per Room *</label>
                      <p>Select the number of guests staying in each room.</p>
                    </div>
                    <span className="total-guests-badge">
                      {totalGuests} Guest{totalGuests > 1 ? "s" : ""} Total
                    </span>
                  </div>

                  <div className="room-guest-list">
                    {bookingData.guestsPerRoom.map((roomGuests, index) => (
                      <div className="room-guest-item" key={index}>
                        <div className="room-guest-label">
                          <span className="room-number-chip">{index + 1}</span>
                          <div>
                            <strong>Room {index + 1}</strong>
                            <small>Guests</small>
                          </div>
                        </div>

                        <select
                          value={roomGuests}
                          onChange={(e) =>
                            handleGuestsPerRoomChange(index, e.target.value)
                          }
                          required
                          className="form-control room-guest-select"
                          aria-label={`Guests for room ${index + 1}`}
                        >
                          {[1, 2].map((num) => (
                            <option key={num} value={num}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
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
        <span>Number of Rooms</span>
        <strong>
            {bookingData.numberOfRooms}
        </strong>
    </div>

    <div className="summary-item summary-guests">
        <span>Guests Per Room</span>
        <strong>
            {bookingData.guestsPerRoom.map((guests, index) => (
              <span className="summary-room-guests" key={index}>
                Room {index + 1}: {guests} Guest{guests > 1 ? "s" : ""}
              </span>
            ))}
            <span className="summary-room-total">
              Total: {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
            </span>
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
                      required
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
        <span>Number of Rooms:</span>
        <strong>{backendBooking?.numberOfRooms || bookingData.numberOfRooms}</strong>
      </div>

      <div className="detail-item">
        <span>Guests Per Room:</span>
        <strong className="confirmation-room-guests">
          {(backendBooking?.guestsPerRoom || bookingData.guestsPerRoom).map(
            (guests, index) => (
              <span key={index}>
                Room {index + 1}: {guests} Guest{guests > 1 ? "s" : ""}
              </span>
            )
          )}
        </strong>
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