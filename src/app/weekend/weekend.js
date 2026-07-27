"use client";
import React from "react";
import Link from "next/link";
import "./Weekend.css";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Weekend = () => {
  
  return (
    <>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Offer",
      name: "30% Weekend Discount",
      description:
        "Save 30% on weekend stays at Airport Golden Tulip Hotel.",
      availability: "https://schema.org/InStock",
      category: "Hotel Promotion",
      seller: {
        "@type": "Hotel",
        name: "Airport Golden Tulip Hotel",
      },
    }),
  }}
/>

      <main className="promo-page">

        {/* ================= HERO ================= */}

        <section className="promo-hero">

          <div className="promo-overlay"></div>

          <div className="promo-container">

            <div className="promo-content">

              <span className="promo-badge">
                LIMITED TIME OFFER
              </span>

              <h1>
                Escape the Weekend.
                <br />
                <span>Save 30% On Every Stay.</span>
              </h1>

              <p>
                Treat yourself to an unforgettable weekend at
                Airport Golden Tulip Hotel.
                Enjoy luxury accommodation, exceptional dining,
                premium amenities and warm hospitality —
                now at an exclusive 30% discount.
              </p>

              <div className="promo-buttons">

                <Link href="/booking" className="book-btn">
                  Book Now
                  <FaArrowRight />
                </Link>

                <Link href="/rooms" className="outline-btn">
                  Explore Rooms
                </Link>

              </div>

              <div className="promo-features">

                <div>
                  <FaCheckCircle />
                  <span>Luxury Rooms</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Free Wi-Fi</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Breakfast Included</span>
                </div>

                <div>
                  <FaCheckCircle />
                  <span>Airport Shuttle</span>
                </div>

              </div>

            </div>

            <div className="discount-card">

              <h3>Weekend Deal</h3>

              <h2>30%</h2>

              <span>OFF</span>

              <p>
                Available Every Weekend
              </p>

              <hr />

              <ul>

                <li>✔ Friday - Sunday</li>

                <li>✔ Luxury Accommodation</li>

                <li>✔ Complimentary Breakfast</li>

                <li>✔ Free Airport Shuttle</li>
              </ul>
              <a href="/booking" className="card-btn">
                Reserve Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Weekend;