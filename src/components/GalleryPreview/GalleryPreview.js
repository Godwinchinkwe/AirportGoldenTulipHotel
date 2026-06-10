"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

import "./GalleryPreview.css";

import Frontdesk from "../../../public/images/hotel/frontdesk.jpg";
import Restaurant from "../../../public/images/amenities/Lounge Bar.jpg";
import Suite from "../../../public/images/rooms/Suite.jpg";
import Poolside from "../../../public/images/amenities/poolside.jpg";
import Outside from "../../../public/images/hotel/Outside.jpg";
import Restau from "../../../public/images/hotel/Outside.jpg";

export default function GalleryPreview() {
  const galleryImages = [
    {
      url: Outside,
      title: "Hotel Exterior",
      category: "Exterior",
    },

    {
      url: Frontdesk,
      title: "Luxury Lobby",
      category: "Lobby",
    },

    {
      url: Suite,
      title: "Premium Suite",
      category: "Rooms",
    },

    {
      url: Restaurant,
      title: "Fine Dining Restaurant",
      category: "Restaurant",
    },

    {
      url: Poolside,
      title: "Swimming Pool",
      category: "Facility",
    },

    {
      url: Restau,
      title: "Event Space",
      category: "Events",
    },
  ];

  const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Airport Golden Tulip Hotel Gallery",
  url: "https://www.airportgoldentuliphotel.com/gallery",
};

  return (
    <>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(gallerySchema),
  }}/>
    <section className="section gallery-preview-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2>Hotel Gallery</h2>

          <p className="section-subtitle">
            Explore our luxurious facilities,
            accommodations, restaurant, event spaces,
            and amenities at Airport Golden Tulip Hotel Lagos.
          </p>
        </motion.div>

        <div className="gallery-preview-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="gallery-preview-item"
            >
              <Image
                src={image.url}
                alt={`${image.title} - Airport Golden Tulip Hotel Lagos`}
                width={600}
                height={400}
                loading="lazy"
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </div>
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
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <br />

          <Link
            href="/gallery"
            className="btn btn-outline"
          >
            View Full Gallery

            <FiChevronRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}