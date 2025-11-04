import React, { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "../lib/utils";

const LogBook = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://render.com/docs/web-services#port-binding/blogs"); 
        setBlogs(res.data);
        console.log("Fetched blogs:", res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="coming-soon-text relative z-20 h-full flex justify-center items-center text-white text-xl">
        Under Development 🏗️
      </div>
    </div>
  );
};

export default LogBook;
