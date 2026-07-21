"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaCoffee,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import { rooms } from "@/data/rooms";

import "./RoomDetails.css";

export default function RoomDetails() {
  const params = useParams();
  const roomType = params.roomType;
  const room = rooms[roomType];
  const [currentImage, setCurrentImage] = useState(0);
  if (!room) {
    return (
      <div className="container">
        <h1>Room Not Found</h1>

        <Link href="/rooms">
          Back to Rooms
        </Link>
      </div>
    );
  }

  const roomSchema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Hotel",

        "@id":
          "https://www.airportgoldentuliphotel.com/#hotel",

        name: "Airport Golden Tulip Hotel",

        url:
          "https://www.airportgoldentuliphotel.com",

        telephone: "+2348157003333",

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "40-42 Murtala Muhammed International Airport Road",

          addressLocality: "Ikeja",

          addressRegion: "Lagos",

          addressCountry: "NG",
        },
      },

      {
        "@type": "HotelRoom",

        name: room.title,

        description: room.description,

        bed: room.bedType,

        occupancy: {
          "@type": "QuantitativeValue",

          maxValue: room.capacity,
        },

        amenityFeature:
          room.amenities.map((item) => ({
            "@type":
              "LocationFeatureSpecification",

            name: item,

            value: true,
          })),

        offers: {
          "@type": "Offer",

          priceCurrency: "NGN",

          price: room.price,

          availability:
            "https://schema.org/InStock",
        },
      },

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item:
              "https://www.airportgoldentuliphotel.com",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Rooms",

            item:
              "https://www.airportgoldentuliphotel.com/rooms",
          },

          {
            "@type": "ListItem",

            position: 3,

            name: room.title,

            item: `https://www.airportgoldentuliphotel.com/rooms/${roomType}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomSchema),
        }}
      />

      <div className="room-details">
        <section className="room-hero">
          <div className="container">
            <h1>{room.title}</h1>

            <p>{room.description}</p>
          </div>
        </section>

        <section className="room-gallery">
          <div className="container">
            <div className="main-image-wrapper">
              <Image
                src={room.images[currentImage]}
                alt={`${room.title} at Airport Golden Tulip Hotel Lagos`}
                width={1200}
                height={800}
                priority
                className="main-room-image"
              />
            </div>

            <div className="thumbnail-grid">
              {room.images.map(
                (image, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentImage(index)
                    }
                  >
                    <Image
                      src={image}
                      alt={`${room.title} image ${
                        index + 1
                      }`}
                      width={200}
                      height={120}
                    />
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        <section className="room-info">
          <div className="container">
            <h2>
              Room Features &
              Amenities
            </h2>

            <div className="room-meta">
              <p>
                <strong>Price:</strong> ₦
                {room.price.toLocaleString()}
                /night
              </p>

              <p>
                <strong>Size:</strong>{" "}
                {room.size}
              </p>

              <p>
                <strong>Capacity:</strong>{" "}
                {room.capacity} Guests
              </p>
            </div>

            <div className="features-grid">
              {room.features.map(
                (feature, index) => (
                  <div
                    key={index}
                    className="feature-item"
                  >
                    <FaWifi />
                    <span>
                      {feature}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="room-seo-section">
          <div className="container">
            <h2>
              {room.title} Near Lagos
              Airport
            </h2>

            <p>
              The {room.title} at
              Airport Golden Tulip
              Hotel Lagos provides
              premium accommodation
              near Murtala Muhammed
              International Airport.
            </p>

            <p>
              Guests enjoy luxury
              amenities, complimentary
              WiFi, modern furnishings,
              breakfast options and
              convenient access to
              major business districts
              in Lagos.
            </p>
          </div>
        </section>

        <section className="room-cta">
          <div className="container">
            <Link
              href={`/booking?room=${roomType}`}
              className="btn btn-primary"
            >
              Book This Room
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}