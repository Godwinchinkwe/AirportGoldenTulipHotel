"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import heroImage from "./heroimage.jpg";
import Image from "next/image";

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
<Image src={heroImage}
        alt="Airport Golden Tulip Hotel Lagos near Murtala Muhammed International Airport"
        fill
        priority
        loading="eager"
        quality={75}
        sizes="100vw"
        className="hero-image"/>
      <div className="hero-overlay"></div>


      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Hotels Near Lagos Airport </h1>

          <div className="tagline">
            <Typewriter
              options={{
                strings: [
                  "2 Minutes from Murtala Muhammed International Airport.",
                  "Luxury Rooms In Ikeja",
                  "Airport Accommodation in Lagos.",
                  "Airport Hotel Accommodation.",
                ],
                loop: true,
                autoStart: true,
                typeSpeed: 120,
                backSpeed: 80,
                backDelay: 1000,
                deleteSpeed: 10,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="hero-rating"
        >
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <Link href="/review">
            5.0 Rating (4,847 Reviews)
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="hero-buttons"
        >
          <Link
            href="/booking"
            onClick={scrollToTop}
            className="btn btn-primary"
          >
            Book Your Stay
          </Link>

          <Link
            href="/rooms"
            onClick={scrollToTop}
            className="btn btn-primary"
          >
            View Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;