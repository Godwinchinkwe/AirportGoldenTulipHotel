"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import RoomCard from "@/components/RoomCard/RoomCard";

import Deluxe from "../../../public/images/rooms/Deluxe.jpg";
import Executive from "../../../public/images/rooms/executive.jpg";
import Suite from "../../../public/images/rooms/Suite.jpg";

import "./Rooms.css";

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [searchTerm, setSearchTerm] =
    useState("");

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

      category: "standard",

      capacity: 2,
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

      category: "business",

      capacity: 2,
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

      category: "luxury",

      capacity: 4,
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Rooms",
      count: rooms.length,
    },

    {
      id: "standard",
      name: "Deluxe",
      count: rooms.filter(
        (r) => r.category === "standard"
      ).length,
    },

    {
      id: "business",
      name: "Executive",
      count: rooms.filter(
        (r) => r.category === "business"
      ).length,
    },

    {
      id: "luxury",
      name: "Suite",
      count: rooms.filter(
        (r) => r.category === "luxury"
      ).length,
    },
  ];

  const filteredRooms = rooms.filter(
    (room) => {
      const matchesCategory =
        selectedCategory === "all" ||
        room.category === selectedCategory;

      const matchesSearch =
        room.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        room.description
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesCategory && matchesSearch
      );
    }
  );

  return (
    <div className="rooms">
      {/* Hero */}
      <section className="rooms-hero">
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
              Our Rooms & Suites
            </h1>

            <p>
              Choose from our
              selection of luxurious
              accommodations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section filters-section">
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
            className="filters-container"
          >
            <div className="filter-group">
              <div className="search-box">
                <FaSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-group">
              <div className="category-filters">
                {categories.map(
                  (category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        setSelectedCategory(
                          category.id
                        )
                      }
                      className={`category-btn ${
                        selectedCategory ===
                        category.id
                          ? "active"
                          : ""
                      }`}
                    >
                      {category.name}

                      <span className="category-count">
                        {
                          category.count
                        }
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="section rooms-grid-section bg-off-white">
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
            className="results-info"
          >
            <p>
              Showing{" "}
              {filteredRooms.length} of{" "}
              {rooms.length} rooms
            </p>
          </motion.div>

          <div className="rooms-grid">
            {filteredRooms.length >
            0 ? (
              filteredRooms.map(
                (
                  room,
                  index
                ) => (
                  <motion.div
                    key={room.id}
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
                        index *
                        0.1,
                    }}
                  >
                    <RoomCard
                      room={room}
                    />
                  </motion.div>
                )
              )
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="no-results"
              >
                <h3>
                  No rooms found
                </h3>

                <p>
                  Try adjusting
                  your search
                  criteria
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}