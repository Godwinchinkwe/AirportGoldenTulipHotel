import Link from "next/link";
import Image from "next/image";

import { blogPosts } from "@/data/blogPosts";
import { blogPosts2 } from "@/data/blogPosts2";

import "@/components/Blog/blog.css";

export const metadata = {
  title: "Hotel Blog | Airport Golden Tulip Hotel",
  description:
    "Travel tips, hotel updates and hospitality insights from Airport Golden Tulip Hotel Lagos.",
};

export default function BlogPage() {

    const allBlogPosts = [
    ...blogPosts,
    ...blogPosts2,
  ];
  return (
    <main className="blog-page containered">
      
      <div className="blog-header">
        <h1>Hotel Blog</h1>

        <p>
          Travel tips, hospitality insights and updates from
          Airport Golden Tulip Hotel Lagos.
        </p>
      </div>

      <div className="blog-list">
        {allBlogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
                          <Link
                href={`/blog/${post.slug}`}
                className="read-more-btn">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="blog-card-image"
            />
            </Link>

            <div className="blog-card-content">
              <h2>{post.title}</h2>

              {/* <time> */}
                {/* {new Date(post.date).toLocaleDateString()} */}
                <time dateTime={post.date}>
  {new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</time>
              {/* </time> */}

              <p>{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="read-more-btn"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}