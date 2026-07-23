export default function sitemap() {
  const baseUrl =
    "https://www.airportgoldentuliphotel.com";

  const blogPosts = [
    "best-airport-hotel-in-lagos",
    "luxury-accommodation-near-mma",
    "top-hotel-for-business-travelers",
    "top-10-hotels-around-lagos-international-airport-road",
    "conference-hotels-in-ikeja-airport-golden-tulip-hotel",
    "why-staying-near-murtala-muhammed-international-airport",
    "7-reasons-business-travelers-choose-airport-golden-tulip-hotel-in-lagos",
    "the-ultimate-guide-to-choosing-the-best-hotel-near-lagos-airport",
    "where-to-stay-near-murtala-muhammed-airport",
    "hotel-near-lagos-airport-with-exceptional-hospitality",
    "luxury-hotel-near-lagos-airport-for-short-stays",
    "hotel-near-lagos-airport-for-business-travelers",
    "why-cleanliness-matters-in-hotels",
    "lagos-hotels-near-murtala-muhammed-airport-ranked",
    "why-airport-golden-tulip-hotel-is-among-the-best-hotels-in-ikeja-lagos",
    "top-rated-hotels-near-airport-road-lagos",
    "Why-frequent-flyers-prefer-airport-goldent-tulip-hotel-lagos",
    "why-airport-golden-tulip-hotel-is-the-closest-comfort-to-Murtala-muhammed-airport",
    "best-hotel-near-lagos-airport-for-business-and-transit-travelers",
    "enjoy-off-your-stay-at-airport-golden-tulip-hotel"
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/rooms`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/rooms/deluxe`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/rooms/executive`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/rooms/suite`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  {
    url: `${baseUrl}/weekend`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  
    ...blogUrls,
  ];
}