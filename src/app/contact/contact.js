"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const hotelSchema = {
    "@context": "https://schema.org",

    "@type": "Hotel",

    name: "Airport Golden Tulip Hotel",

    url:
      "https://www.airportgoldentuliphotel.com",

    telephone: "+2348157003333",

    email:
      "reservations@airportgoldentuliphotel.com",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "40-42 Murtala Muhammed International Airport Road",

      addressLocality: "Ikeja",

      addressRegion: "Lagos",

      addressCountry: "NG",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to send message. Please try again."
      );
    }

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",

      content: (
        <>
          40-42 Murtala Muhammed
          International Airport Road
          <br />
          Ikeja, Lagos, Nigeria
        </>
      ),
    },

    {
      icon: FaPhone,
      title: "Bookings / Enquiries/ Complaints / Number to call",

      content: (
        <>
          <a href="tel:+2348157003333">
            +234 815 700 3333
          </a>
          <br />
          <a href="tel:+2348158003333">
            +234 815 800 3333
          </a>
        </>
      ),
    },

    {
      icon: FaEnvelope,
      title: "Email",

      content: (
        <>
          <a href="mailto:info@airportgoldentuliphotel.com">
            info@airportgoldentuliphotel.com
          </a>

          <br />

          <a href="mailto:reservations@airportgoldentuliphotel.com">
            reservations@airportgoldentuliphotel.com
          </a>
        </>
      ),
    },

    {
      icon: FaClock,
      title: "Hours",

      content: (
        <>
          24/7 Reception Desk
          <br />
          Concierge Services Available
        </>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            hotelSchema
          ),
        }}
      />

      <div className="contact">
        {/* HERO */}

        <section className="contact-hero">
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
              <h1>Contact Us</h1>

              <p>
                We are here to help with
                reservations, bookings,
                events and inquiries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO */}

        <section className="section contact-info-section">
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
              <h2>Get in Touch</h2>

              <p className="section-subtitle">
                Multiple ways to reach us
              </p>
            </motion.div>

            <div className="contact-info-grid">
              {contactInfo.map(
                (info, index) => (
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
                    className="contact-info-card"
                  >
                    <div className="contact-icon-wrapper">
                      <info.icon className="contact-icon" />
                    </div>

                    <h4>{info.title}</h4>

                    <div className="contact-content">
                      {info.content}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* GOOGLE MAP */}

        <section className="section map-section">
          <div className="container">
            <iframe
              title="Airport Golden Tulip Hotel Lagos"
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              style={{
                border: 0,
                borderRadius: "12px",
              }}
            />
          </div>
        </section>

        {/* CONTACT FORM */}

        <section className="section contact-form-section bg-off-white">
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
              <h2>Send Us a Message</h2>

              <p className="section-subtitle">
                We will get back to you as
                soon as possible
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
              }}
              className="contact-form-container"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="success-message"
                >
                  <h3>
                    Thank You!
                  </h3>

                  <p>
                    Your message has been
                    sent successfully.
                  </p>
                </motion.div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={
                    handleSubmit
                  }
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <label>
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={
                          formData.name
                        }
                        onChange={
                          handleInputChange
                        }
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={
                          formData.email
                        }
                        onChange={
                          handleInputChange
                        }
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label>
                        Subject *
                      </label>

                      <input
                        type="text"
                        name="subject"
                        value={
                          formData.subject
                        }
                        onChange={
                          handleInputChange
                        }
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label>
                        Message *
                      </label>

                      <textarea
                        name="message"
                        value={
                          formData.message
                        }
                        onChange={
                          handleInputChange
                        }
                        required
                        rows="6"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      isLoading
                    }
                    className="btn btn-primary submit-btn"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* SEO SECTION */}

        <section className="section contact-seo">
          <div className="container">
            <h2>
              Hotel Near Lagos Airport
            </h2>

            <p>
              Airport Golden Tulip Hotel
              is conveniently located
              near Murtala Muhammed
              International Airport,
              making it a preferred
              choice for business
              travellers, tourists, and
              transit passengers looking
              for luxury accommodation
              in Lagos.
            </p>

            <p>
              Contact our reservations
              team 24 hours a day for
              room bookings, conference
              reservations, restaurant
              bookings, airport
              accommodation, and event
              inquiries.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}