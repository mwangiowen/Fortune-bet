import { useState } from "react";
import "./all.css";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const blogPosts = [
    {
      title: "Top Strategies for Winning Big in Online Casinos 🎰",
      date: "March 10, 2025",
      snippet: "Discover the best strategies to maximize your winnings and enjoy a safe gaming experience.",
    },
    {
      title: "Understanding Cryptocurrency Betting 💰",
      date: "March 8, 2025",
      snippet: "Learn how cryptocurrency is revolutionizing online betting and why you should consider using it.",
    },
    {
      title: "Responsible Gaming: Tips for Safe Gambling ⚠️",
      date: "March 5, 2025",
      snippet: "Stay in control of your gambling habits with these practical and responsible gaming tips.",
    },
  ];

  return (
    <>
      <button className="blog-button" onClick={() => setIsOpen(true)}>
        Blog
      </button>

      {isOpen && (
        <div className="blog-modal">
          <div className="blog-container">
            <h2 className="blog-title">Latest Blog Posts</h2>
            <ul className="blog-list">
              {blogPosts.map((post, index) => (
                <li key={index} className="blog-item">
                  <h3 className="blog-item-title">{post.title}</h3>
                  <p className="blog-item-date">{post.date}</p>
                  <p className="blog-item-snippet">{post.snippet}</p>
                </li>
              ))}
            </ul>
            <button className="blog-close-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
