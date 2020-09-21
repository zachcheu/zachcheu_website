import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
const bucket = "zach-blog-images";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        `https://storage.googleapis.com/storage/v1/b/${bucket}/o`
      );
      console.log(results);
      if (results.status === 200) {
        setItems(results.data.items);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function displayImages() {
    return items.map((i) => (
      <img
        src={`https://storage.googleapis.com/${bucket}/${i.name}`}
        className="blogImage"
      />
    ));
  }

  return (
    <div className="blog">
      <h1>Blog</h1>
      {loading && <h1>Loading</h1>}
      {!loading && displayImages()}
    </div>
  );
}

export default Blog;
