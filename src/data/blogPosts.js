import AirportHotel from "../../public/images/hotel/Outside.jpg";
import LuxurySuite from "../../public/images/rooms/Suite.jpg";

export const blogPosts = [
  {
    slug: "best-airport-hotel-in-lagos",
    title: "Best Airport Hotel in Lagos",
    date: "2025-01-15",
    image: AirportHotel,
    excerpt:
      "Discover why Airport Golden Tulip Hotel is one of the most convenient luxury hotels near MMIA.",

    content: `
      <p>
        Airport Golden Tulip Hotel offers premium accommodation
        just minutes from Murtala Muhammed International Airport.
      </p>

      <p>
        Guests enjoy luxury rooms, airport proximity, free WiFi,
        fine dining and exceptional customer service.
      </p>
    `,
  },

  {
    slug: "luxury-suite-experience",
    title: "Luxury Suite Experience",
    date: "2025-03-20",
    image: LuxurySuite,
    excerpt:
      "Experience comfort and elegance in our Luxury Suites.",

    content: `
      <p>Our luxury suites provide spacious living areas,
        premium amenities and world-class hospitality.</p>
      <p>
        Perfect for executives, families and leisure travelers.</p>
    `,
  },
   {
    slug: "suite-experience",
    title: "Suite Experience",
    date: "2025-03-20",
    image: LuxurySuite,
    excerpt:
      "Experience comfort and elegance in our Luxury Suites.",

    content: `
      <p>Our luxury suites provide spacious living areas,
        premium amenities and world-class hospitality.</p>
      <p>
        Perfect for executives, families and leisure travelers.</p>
    `,
  },
   {
    slug: "Ry-suite-experience",
    title: "ry Suite Experience",
    date: "2025-03-20",
    image: LuxurySuite,
    excerpt:
      "Experience comfort and elegance in our Luxury Suites.",

    content: `
      <p>Our luxury suites provide spacious living areas,
        premium amenities and world-class hospitality.</p>
      <p>
        Perfect for executives, families and leisure travelers.</p>
    `,
  },
];

export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};