"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaWifi,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaConciergeBell,
} from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";

import Hero from "../../src/components/Hero/Hero";
import RoomCard from "../components/RoomCard/RoomCard";
import GalleryPreview from "../../src/components/GalleryPreview/GalleryPreview";

import Deluxe from "../../public/images/rooms/Deluxe.jpg";
import Suite from "../../public/images/rooms/Suite.jpg";
import Executive from "../../public/images/rooms/executive.jpg";

import "./page.css";

const Home = () => {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Airport Golden Tulip Hotel",
    url: "https://www.airportgoldentuliphotel.com",
    telephone: "+2348158003333",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "40-42 Murtala Muhammed International Airport Road",
      addressLocality: "Ikeja",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Gym",
        value: true,
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const amenities = [
    {
      icon: FaSwimmingPool,
      title: "Swimming Pool",
      description: "Olympic-size heated pool",
    },
    {
      icon: FaWifi,
      title: "Free WiFi",
      description: "High-speed internet access",
    },
    {
      icon: FaParking,
      title: "Hotel Near Airport Lagos",
      description: "Hotel Near Murtala Muhammed Airport",
    },
    {
      icon: FaUtensils,
      title: "Fine Dining",
      description: "Award-winning restaurant",
    },
    {
      icon: FaDumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym",
    },
    {
      icon: FaConciergeBell,
      title: "Concierge",
      description: "24/7 guest services",
    },
  ];

  const rooms = [
    {
      id: "deluxe",
      title: "Deluxe Room",
      description:
        "Comfortable and elegant rooms with modern amenities",
      price: 150000,
      image: Deluxe,
      features: [
        "King Size Bed",
        "City View",
        "Free WiFi",
        "Mini Bar",
        "Work Desk",
      ],
    },

    {
      id: "executive",
      title: "Executive Room",
      description:
        "Premium workspace with luxurious accommodations",
      price: 180000,
      image: Executive,
      features: [
        "Executive Lounge Access",
        "Premium Amenities",
        "Work Area",
        "City View",
        "Complimentary Breakfast",
      ],
    },

    {
      id: "suite",
      title: "Luxury Suite",
      description:
        "Ultimate luxury with separate living area",
      price: 300000,
      image: Suite,
      features: [
        "Separate Living Area",
        "Premium Suite",
        "Butler Service",
        "Panoramic View",
        "Spa Access",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema),
        }}
      />

      <div className="home">
        <Hero />

        <section className="section amenities-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-header text-center"
            >
              <h2>World-Class Amenities</h2>

              <p className="section-subtitle">
                Experience luxury with our premium facilities
                and services.
              </p>
            </motion.div>

            <div className="amenities-grid">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="amenity-card"
                >
                  <div className="amenity-icon">
                    <amenity.icon />
                  </div>

                  <h4>{amenity.title}</h4>

                  <p>{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section rooms-section bg-off-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-header text-center"
            >
              <h2>Luxurious Accommodations</h2>

              <p className="section-subtitle">
                Choose from our elegant collection of rooms and
                suites.
              </p>
            </motion.div>

            <div className="rooms-grid">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link
                href="/rooms"
                onClick={scrollToTop}
                className="btn btn-outline"
              >
                View All Rooms
                <FiChevronRight className="btn-icon" />
              </Link>
            </motion.div>
          </div>
        </section>

        <GalleryPreview />

        <section className="section cta-section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cta-content text-center"
            >
              <h2>Ready to Experience Luxury?</h2>

              <p>
                Experience refined comfort and effortless elegance at Airport Golden Tulip Hotel, a premium hotel near MMIA Ikeja Lagos ideally located on Airport Road Ikeja, delivering unmatched convenience for travelers seeking a trusted hotel Airport Road and a top-rated transit hotel Lagos airport. Just minutes from Murtala Muhammed International Airport, our hotel offers a seamless blend of luxury accommodation, modern amenities, and exceptional hospitality for both local and international guests.
              </p>
              <p>Whether you re visiting Lagos for business, leisure, or a short transit stay, enjoy spacious rooms, high-speed Wi-Fi, fine dining, and a serene environment designed to help you relax and recharge. Avoid the stress of city traffic and choose a reliable hotel on Airport Road Ikeja, known for comfort, security, and quick airport access.</p>

              <Link
                href="/booking"
                onClick={scrollToTop}
                className="btn btn-white"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;