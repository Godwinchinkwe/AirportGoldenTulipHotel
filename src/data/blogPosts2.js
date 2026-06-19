import AirportHotel from "../../public/images/hotel/Outside.jpg";

   export const blogPosts2 = [

  
 {
    slug: "",
    title: "",
    date: "2026-06-20",
    image: AirportHotel,
    excerpt:
      "",
    content: `
      <p><p>
    `,
  },

];

export const getPostBySlug2 = (slug) => {
  return blogPosts2.find((post) => post.slug === slug);
};