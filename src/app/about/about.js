"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaAward,
  FaUsers,
  FaHeart,
  FaHandshake,
} from "react-icons/fa";

import Restaurant from "../../../public/images/restaurant.jpg";

import "./About.css";

export default function About() {
  const values = [
    {
      icon: FaAward,
      title: "Excellence",
      description:
        "We strive to deliver exceptional hospitality standards, luxurious accommodations, and memorable guest experiences.",
    },

    {
      icon: FaUsers,
      title: "Hospitality",
      description:
        "Every guest is treated with professionalism, warmth, and personalized attention throughout their stay.",
    },

    {
      icon: FaHeart,
      title: "Passion",
      description:
        "Our team is passionate about creating comfortable, relaxing, and unforgettable experiences.",
    },

    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, professionalism, and respect for our guests and community.",
    },
  ];

  const stats = [
    {
      number: "2 Min",
      label: "From Lagos Airport",
    },

    {
      number: "24/7",
      label: "Front Desk Service",
    },

    {
      number: "100%",
      label: "Guest Focused",
    },

    {
      number: "365",
      label: "Days Hospitality",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",

        name: "Airport Golden Tulip Hotel",

        url:
          "https://www.airportgoldentuliphotel.com",

        logo:
          "https://www.airportgoldentuliphotel.com/logo.png",

        telephone: "+2348157003333",
      },

      {
        "@type": "Hotel",

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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationSchema
          ),
        }}
      />

      <div className="about">
        {/* Hero Section */}

        <section className="about-hero">
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
                About Airport Golden Tulip Hotel
              </h1>

              <p>
                Luxury Airport Hotel in Lagos,
                Nigeria
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}

        <section className="section about-story">
          <div className="container">
            <div className="about-story-content">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="about-story-text"
              >
                <h2>Our Story</h2>

                <p>
                  Airport Golden Tulip Hotel is
                  a luxury hotel strategically
                  located along Murtala
                  Muhammed International Airport
                  Road in Ikeja, Lagos.
                </p>

                <p>
                  Designed to serve both
                  business and leisure
                  travellers, the hotel provides
                  world-class accommodation just
                  minutes from Nigerias busiest
                  international airport.
                </p>

                <p>
                  Over the years, Airport Golden
                  Tulip Hotel has become a
                  preferred destination for
                  corporate guests, airline
                  passengers, conference
                  attendees, tourists, and
                  families seeking comfort,
                  convenience, and exceptional
                  hospitality in Lagos.
                </p>

                <p>
                  Our commitment to excellence,
                  customer satisfaction, luxury
                  accommodation, quality dining,
                  and event hosting continues to
                  make us one of the leading
                  airport hotels in Lagos.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="about-story-image"
              >
                <Image
                  src={Restaurant}
                  alt="Airport Golden Tulip Hotel Restaurant Lagos"
                  width={700}
                  height={500}
                  className="about-image"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}

        <section className="section mission-vision bg-off-white">
          <div className="container">
            <div className="mission-vision-grid">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mission-card"
              >
                <h3>Our Mission</h3>

                <p>
                  To deliver exceptional
                  hospitality experiences that
                  combine luxury, comfort, and
                  personalized service while
                  exceeding guest expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="vision-card"
              >
                <h3>Our Vision</h3>

                <p>
                  To be recognized as one of
                  Lagos leading airport hotels,
                  providing world-class
                  hospitality and memorable
                  guest experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}

        <section className="section values-section">
          <div className="container">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="section-header text-center"
            >
              <h2>Our Core Values</h2>

              <p className="section-subtitle">
                The principles that guide
                everything we do
              </p>
            </motion.div>

            <div className="values-grid">
              {values.map(
                (value, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.1,
                    }}
                    className="value-card"
                  >
                    <div className="value-icon">
                      <value.icon />
                    </div>

                    <h4>{value.title}</h4>

                    <p>
                      {
                        value.description
                      }
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Stats */}

        <section className="section stats-section bg-primary">
          <div className="container">
            <div className="stats-grid">
              {stats.map(
                (stat, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.1,
                    }}
                    className="stat-item"
                  >
                    <h3>
                      {stat.number}
                    </h3>

                    <p>{stat.label}</p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}

        <section className="section about-seo">
          <div className="container">
            <h2>
              Luxury Airport Hotel in Lagos
            </h2>

            <p>
              Located near Murtala Muhammed
              International Airport in Ikeja,
              Airport Golden Tulip Hotel
              provides luxury accommodation,
              conference facilities,
              restaurant services, event
              spaces, and premium guest
              experiences for travellers
              arriving in Lagos.
            </p>

            <p>
              Whether you are visiting Lagos
              for business, conferences,
              tourism, or a short airport
              transit stay, our hotel offers
              convenient access to major
              commercial districts,
              government offices, shopping
              centres, and transport routes.
            </p>

            <p>
              Guests enjoy comfortable rooms,
              fine dining, meeting facilities,
              complimentary WiFi, airport
              convenience, and professional
              hospitality services designed to
              make every stay memorable.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}