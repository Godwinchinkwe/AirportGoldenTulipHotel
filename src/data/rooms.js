import Deluxe from "../../public/images/rooms/Deluxe.jpg";
import Executive from "../../public/images/rooms/executive.jpg";
import Suite from "../../public/images/rooms/Suite.jpg";
import Restroom from "../../public/images/hotel/RestRoom.jpg"

export const rooms = {
  deluxe: {
    title: "Deluxe Room",
    description:
      "Comfortable and elegant rooms with modern amenities",
    price: 150000,
    images: [Deluxe, Restroom],
    features: [
      "King Size Bed",
      "City View",
      "Free WiFi",
      "Work Desk",
      "Air Conditioning",
      "Flat Screen TV",
      "Safe",
      "Complimentary Breakfast for 1",
    ],
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Complimentary Breakfast for 1",
      "Safe",
      "Flat Screen TV",
    ],
    size: "35 sqm",
    capacity: 2,
    bedType: "King Size Bed",
  },

  executive: {
    title: "Executive Room",
    description:
      "Premium workspace with luxurious accommodations for business travelers",
    price: 180000,
    images: [Executive, Restroom],
    features: [
      "Executive Lounge Access",
      "Premium Amenities",
      "Work Area",
      "City View",
      "Complimentary Breakfast",
      "King Size Bed",
      "Air Conditioning",
      "Safe",
      "Complimentary Breakfast for 1",
    ],
    amenities: [
      "Executive Lounge",
      "Complimentary Breakfast",
      "Premium Amenities",
      "Work Area",
      "City View",
    ],
    size: "45 sqm",
    capacity: 2,
    bedType: "King Size Bed",
  },

  suite: {
    title: "Luxury Suite",
    description:
      "Ultimate luxury with separate living area and premium amenities",
    price: 300000,
    images: [Suite, Restroom],
    features: [
      "Separate Living Area",
      "Premium Suite",
      "Panoramic View",
      "King Size Bed",
      "Jacuzzi",
      "Complimentary Breakfast for 2",
    ],
    amenities: [
      "Separate Living Area",
      "Spa Access",
      "Panoramic View",
    ],
    size: "80 sqm",
    capacity: 4,
    bedType: "King Size Bed",
  },
};