"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaStar,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";

import "./RoomCard.css";

const RoomCard = ({ room }) => {
  const getIconForFeature = (feature) => {
    const lowerFeature = feature.toLowerCase();

    if (lowerFeature.includes("wifi")) return FaWifi;
    if (lowerFeature.includes("parking")) return FaParking;
    if (
      lowerFeature.includes("pool") ||
      lowerFeature.includes("swimming")
    )
      return FaSwimmingPool;

    if (
      lowerFeature.includes("breakfast") ||
      lowerFeature.includes("dining")
    )
      return FaUtensils;

    return FaStar;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="room-card"
    >
      <div className="room-image-container">
        <Image
          src={room.image}
          alt={`${room.title} at Airport Golden Tulip Hotel`}
          className="room-image"
          width={600}
          height={400}
          sizes="(max-width:768px) 100vw, 33vw"
        />

        <div className="room-price">
          <span className="price-amount">
            ₦{room.price.toLocaleString()}
          </span>

          <span className="price-period">
            /night
          </span>
        </div>
      </div>

      <div className="room-content">
        <h3 className="room-title">
          {room.title}
        </h3>

        <p className="room-description">
          {room.description}
        </p>

        <div className="room-features">
          {room.features
            .slice(0, 3)
            .map((feature, index) => {
              const IconComponent =
                getIconForFeature(feature);

              return (
                <div
                  key={index}
                  className="room-feature"
                >
                  <IconComponent className="feature-icon" />

                  <span>{feature}</span>
                </div>
              );
            })}
        </div>

        <div className="room-footer">
          <div className="room-rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="star-icon"
              />
            ))}

            <span className="rating-text">
              (4.9)
            </span>
          </div>

          <Link
            href={`/rooms/${room.id}`}
            onClick={scrollToTop}
            className="room-link"
          >
            View Details
            <FiChevronRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;