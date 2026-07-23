"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";
import logo from "../../../public/logos/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    // { path: "/", label: "Home" },
    { path: "/rooms", label: "Accommodations" },
    { path: "/booking", label: "Booking" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/weekend", label: "Weekend Promo" },
  ];

  const isActive = (path) => {
    return (
      pathname === path ||
      (path === "/" && pathname === "/") ||
      (path !== "/" && pathname.startsWith(path))
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`header ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container">
          <div className="header-content">
            <Link
              href="/"
              className="logo"
              onClick={scrollToTop}
            >
              <Image
                src={logo}
                alt="Airport Golden Tulip Hotel Logo"
                className="logosize"
                priority
              />
            </Link>

            <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li
                    key={item.path}
                    className="nav-item"
                  >
                    <Link
                      href={item.path}
                      className={`nav-link ${
                        isActive(item.path) ? "active" : ""
                      }`}
                      onClick={() => {
                        scrollToTop();
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link
                href="/booking"
                className="btn btn-primary"
                onClick={scrollToTop}
              >
                Book Now
              </Link>

              <button
                className="nav-toggle"
                onClick={() =>
                  setIsMenuOpen(!isMenuOpen)
                }
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-overlay"
            onClick={() =>
              setIsMenuOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;