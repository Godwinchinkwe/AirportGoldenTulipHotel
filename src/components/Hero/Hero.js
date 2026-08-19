"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import heroImage from "./heroimage.jpg";
import "./Hero.css";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <motion.div
        className="hero-image-wrapper"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src={heroImage}
          alt="Airport Golden Tulip Hotel Lagos near Murtala Muhammed International Airport"
          fill
          priority
          loading="eager"
          quality={80}
          sizes="100vw"
          className="hero-image"
        />
      </motion.div>

      {/* Luxury layered overlay */}
      <div className="hero-overlay" />

      <div className="hero-gradient" />

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Location Badge */}
          <motion.div
            className="hero-location"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            <span className="location-line"></span>
            <span>2 MINUTES FROM MMIA</span>
            <span className="location-line"></span>
          </motion.div>

          <h1>Hotels Near Lagos Airport</h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            Luxury accommodation in Ikeja, Lagos,
            <br />
            moments from Murtala Muhammed International Airport.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="/booking"
            onClick={scrollToTop}
            className="btn btn-primary"
          >
            <span>Book Your Stay</span>
            <span className="btn-arrow">↗</span>
          </Link>

          <Link
            href="/rooms"
            onClick={scrollToTop}
            className="btn btn-secondary"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.4,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line">
          <motion.span
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;