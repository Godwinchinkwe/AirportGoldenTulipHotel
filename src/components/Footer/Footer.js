"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import Typewriter from "typewriter-effect";

import "./Footer.css";
import Logo from "../../../public/logos/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    quickLinks: [
      { path: "/", label: "Home" },
      { path: "/rooms", label: "Rooms & Suites" },
      { path: "/booking", label: "Book Now" },
      { path: "/about", label: "About Us" },
      { path: "/contact", label: "Contact" },
    ],

    services: [
      {
        path: "https://services.airportgoldentuliphotel.com/menu-and-prices/",
        label: "Menu",
        external: true,
      },
      {
        path: "/faq",
        label: "FAQ",
      },
      {
        path: "/gallery",
        label: "Gallery",
      },
      {
        path: "/gallery",
        label: "Fine Dining",
      },
      {
        path: "/blog",
        label: "Blog",
      },
    ],
  };

  const socialLinks = [
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/goldentuliphotellagos",
      label: "Facebook",
    },
    {
      icon: FiTwitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/airportgoldentulip_hotel/",
      label: "Instagram",
    },
    {
      icon: FiLinkedin,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section footer-company"
          >
            <div className="footer-logo">
              <Link href="/" onClick={scrollToTop}>
                <Image
                  src={Logo}
                  alt="Airport Golden Tulip Hotel Logo"
                  className="logo-icon"
                  priority={false}
                />
              </Link>
            </div>

            <p className="footer-description">
              Airport Golden Tulip Hotel is a premium hotel in Ikeja,
Lagos located just minutes from Murtala Muhammed
International Airport. Whether you are travelling for
business, conferences, transit stays, or leisure,
our hotel offers luxury rooms, executive suites,
fine dining, event facilities, airport convenience,
and exceptional hospitality.

              {/* <Typewriter
                options={{
                  strings: [
                    "Comfort reserved just minutes from Lagos International Airport, with luxurious ambience and excellent international standards.",
                  ],
                  loop: true,
                  autoStart: true,
                  typeSpeed: 150,
                  backSpeed: 80,
                  backDelay: 1000,
                  deleteSpeed: 10,
                }}
              /> */}
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section"
          >
            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="footer-link"
                    onClick={scrollToTop}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="footer-title">Our Services</h4>

            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.path}
                      className="footer-link"
                      onClick={scrollToTop}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h4 className="footer-title">Contact Info</h4>

            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  40–42 Murtala Muhammed International Airport Road,
                  Oshodi-Ikeja, Lagos.
                </span>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />

                <span>
                  <a href="tel:+2348157003333">
                    Reception
                  </a>
                </span>

                <span>
                  <a href="tel:+234815003333">
                    Front Desk
                  </a>
                </span>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />

                <span>
                  <a href="mailto:reservations@airportgoldentuliphotel.com">
                    Reservations
                  </a>
                </span>
              </div>

              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Airport Golden Tulip Hotel.
            All rights reserved. |
            {" "}
            <Link href="/privacypolicy">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/teamsofservice">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;