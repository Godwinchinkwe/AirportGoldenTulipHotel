import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getPostBySlug } from "../../../data/blogPosts";
import { getPostBySlug2 } from "../../../data/blogPosts2";

import "@/components/Blog/blog.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  

const post =
  getPostBySlug(slug) || getPostBySlug2(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Airport Golden Tulip Hotel`,
    description: post.excerpt,

    keywords: post.keywords,
      authors: [
    {
      name: "Airport Golden Tulip Hotel",
    },
  ],

  creator: "Airport Golden Tulip Hotel",

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image.src || post.image],
    },

      twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.excerpt,
    images: [post.image.src || post.image],
  },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-page containered">
      <article className="single-post">
        <header className="single-post-header">
          <h1>{post.title}</h1>

          <time>
            {new Date(post.date).toLocaleDateString()}
          </time>
        </header>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          className="single-post-image"
          priority
        />

        <section
          className="single-post-content"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />

        <footer className="single-post-footer">
          <Link href="/blog" className="back-link">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  );
}








// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// import { getPostBySlug } from "../../../data/blogPosts";


// import "@/components/Blog/blog.css";

// export async function generateMetadata({ params }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: `${post.title} | Airport Golden Tulip Hotel`,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [post.image.src],
//     },
//   };
// }

// export default function BlogPostPage({ params }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <main className="blog-page containered">
//       <article className="single-post">
//         <header className="single-post-header">
//           <h1>{post.title}</h1>

//           <time>
//             {new Date(post.date).toLocaleDateString()}
//           </time>
//         </header>

//         <Image
//           src={post.image}
//           alt={post.title}
//           width={1200}
//           height={700}
//           className="single-post-image"
//           priority
//         />

//         <section
//           className="single-post-content"
//           dangerouslySetInnerHTML={{
//             __html: post.content,
//           }}
//         />

//         <footer className="single-post-footer">
//           <Link href="/blog" className="back-link">
//             ← Back to Blog
//           </Link>
//         </footer>
//       </article>
//     </main>
//   );
// }