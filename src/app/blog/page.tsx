"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  images: string[];
  date: string;
  author: string;
}

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBlog]);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "The Importance of Medical Oxygen in Healthcare",
      excerpt:
        "Learn why medical oxygen is critical for patient care and emergency situations.",
      content:
        "Medical oxygen is an essential component in hospitals and emergency care...",
      images: [
        "/images/a/1.jpg",
        "/images/a/1.jpg",
        "/images/a/2.jpg",
        "/images/a/3.jpg",
      ],
      date: "March 25, 2025",
      author: "Bharat Pharma",
    },
    {
      id: 2,
      title: "How to Choose the Right Oxygen Concentrator",
      excerpt:
        "A guide to selecting the best oxygen concentrator for home and hospital use.",
      content:
        "Choosing an oxygen concentrator depends on several factors including...",
      images: [
        "/images/a/1.jpg",
        "/images/a/1.jpg",
        "/images/a/2.jpg",
        "/images/a/3.jpg",
      ],
      date: "March 20, 2025",
      author: "Bharat Pharma",
    },
    {
      id: 3,
      title: "Benefits of Renting Medical Equipment",
      excerpt:
        "Find out why renting medical equipment can be a cost-effective solution.",
      content:
        "Renting medical equipment can save costs and provide flexibility...",
      images: [
        "/images/a/1.jpg",
        "/images/a/1.jpg",
        "/images/a/2.jpg",
        "/images/a/3.jpg",
      ],
      date: "March 15, 2025",
      author: "Bharat Pharma",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Latest Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl h-full flex flex-col"
            onClick={() => setSelectedBlog(blog)}
          >
            <Image
              src={blog.images[0]}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                <div className=" flex justify-between items-center text-gray-500 text-xs">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent modal opening when clicking Read More
                  setSelectedBlog(blog);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedBlog(null)}
            >
              ✖
            </button>
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
              {selectedBlog.images.map((image, index) => (
                <div key={index} className="w-1/3 flex-shrink-0">
                  <Image
                    src={image}
                    alt={`Blog Image ${index + 1}`}
                    width={600}
                    height={350}
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mt-4">{selectedBlog.title}</h2>
            <p className="text-gray-600 mt-2">
              {selectedBlog.date} | By {selectedBlog.author}
            </p>
            <p className="mt-4 text-gray-800">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
