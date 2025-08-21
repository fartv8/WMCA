import React from "react";
import Layout from "./components/Layout";
import ImageGrid from "./components/ImageGrid";

export default function App() {
  const dummyImages = [
    {
      id: 1,
      title: "Wedding Example",
      image_url: "https://picsum.photos/800/600?1",
      category: "wedding",
      description: "A lovely moment",
      featured: true
    },
    {
      id: 2,
      title: "Sports Example",
      image_url: "https://picsum.photos/800/600?2",
      category: "sports",
      description: "Action shot",
      featured: false
    }
  ];

  return (
    <Layout currentPageName="Home">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <ImageGrid images={dummyImages} />
      </div>
    </Layout>
  );
}