import React, { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "../lib/utils";
import { PlusIcon, Search, X, ChevronDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const LogBook = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("new-old"); 
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-m60v.onrender.com/blogs"
        );
        const blogsData = res.data;
        setBlogs(blogsData);
        setFilteredBlogs(blogsData);
        console.log("Fetched blogs:", blogsData);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  useEffect(() => {
    let filtered = [...blogs];


    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }


    filtered.sort((a, b) => {

      let aDate = null;
      let bDate = null;

      if (a.createdAt) {
        aDate = typeof a.createdAt === 'string' 
          ? new Date(a.createdAt) 
          : new Date(a.createdAt);
      } else if (a.date) {
        aDate = typeof a.date === 'string' 
          ? new Date(a.date) 
          : new Date(a.date);
      } else {
        aDate = new Date(0); 
      }

      if (b.createdAt) {
        bDate = typeof b.createdAt === 'string' 
          ? new Date(b.createdAt) 
          : new Date(b.createdAt);
      } else if (b.date) {
        bDate = typeof b.date === 'string' 
          ? new Date(b.date) 
          : new Date(b.date);
      } else {
        bDate = new Date(0); 
      }


      if (sortOrder === "new-old") {
        return bDate.getTime() - aDate.getTime(); 
      } else {
        return aDate.getTime() - bDate.getTime(); 
      }
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchQuery, sortOrder]);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = ""; 
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeBlogModal();
    }
  };


  useEffect(() => {
    if (!selectedBlog) return;
    
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeBlogModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedBlog]);

  const getPreviewText = (content, maxLines = 2) => {
    const lines = content.split("\n").filter((line) => line.trim() !== "");
    return lines.slice(0, maxLines).join(" ");
  };

  const formatDateAndTime = (blog) => {
    const ensureUTC = (isoStr) => {
      if (typeof isoStr !== 'string') return isoStr;
  if (/[zZ]|[+-]\d{2}:?\d{2}/.test(isoStr)) return isoStr;
      return isoStr + 'Z';
    };

    let date = null;

    if (blog.createdAt) {
      const val = typeof blog.createdAt === 'string' ? ensureUTC(blog.createdAt) : blog.createdAt;
      date = new Date(val);
    }
    else if (blog.date) {
      let dateStr = blog.date;

      if (blog.time) {
        let timeStr = String(blog.time).trim();

        if (dateStr.includes('T')) {
          dateStr = dateStr.split('T')[0];
        }
        if (dateStr.includes(' ')) {
          dateStr = dateStr.split(' ')[0];
        }

        timeStr = timeStr.split('+')[0].split('Z')[0].trim();

        const timeParts = timeStr.split(':');
        if (timeParts.length === 2) {
          timeStr = `${timeStr}:00`;
        } else if (timeParts.length === 1 && timeStr.length === 4) {
          timeStr = `${timeStr.slice(0, 2)}:${timeStr.slice(2)}:00`;
        }

        let iso = `${dateStr}T${timeStr}`;
        iso = ensureUTC(iso);
        date = new Date(iso);
      } else {
        dateStr = dateStr.includes('T') ? dateStr : `${dateStr}T00:00:00`;
        dateStr = ensureUTC(dateStr);
        date = new Date(dateStr);
      }
    } else {
      return null;
    }

    if (!date || isNaN(date.getTime())) {
      return null;
    }

    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };

    try {
      const formatted = date.toLocaleString('en-US', options);
      if (formatted.includes(', ')) {
        const parts = formatted.split(', ');
        if (parts.length >= 2) {
          const datePart = parts[0];
          const timePart = parts.slice(1).join(', ');
          return `${datePart} at ${timePart} IST`;
        }
      }

      const timeMatch = formatted.match(/(\d{1,2}:\d{2}\s*(?:AM|PM))/i);
      if (timeMatch) {
        const dateOnly = formatted.replace(/\d{1,2}:\d{2}\s*(?:AM|PM)/i, '').trim().replace(/,\s*$/, '');
        return `${dateOnly} at ${timeMatch[1]} IST`;
      }

      return `${formatted} IST`;
    } catch (error) {
      console.error('Error formatting date:', error, blog);
      return null;
    }
  };

  const BlogCard = ({ blog }) => {
    const previewText = getPreviewText(blog.content);
    const formattedDate = formatDateAndTime(blog);

    return (
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border border-neutral-800 bg-black/40 backdrop-blur-sm px-6 py-6 cursor-pointer transition-all duration-300 hover:bg-black/60 hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-900/50 rounded-xl overflow-hidden"
        )}
        onClick={() => openBlogModal(blog)}
      >
        {/* Decorative corner elements */}
        <PlusIcon
          className="absolute top-[-8px] left-[-8px] z-1 size-5 text-neutral-700"
          strokeWidth={1.5}
        />
        <PlusIcon
          className="absolute top-[-8px] right-[-8px] z-1 size-5 text-neutral-700"
          strokeWidth={1.5}
        />
        <PlusIcon
          className="absolute bottom-[-8px] left-[-8px] z-1 size-5 text-neutral-700"
          strokeWidth={1.5}
        />
        <PlusIcon
          className="absolute right-[-8px] bottom-[-8px] z-1 size-5 text-neutral-700"
          strokeWidth={1.5}
        />

        {/* Side borders */}
        <div className="-inset-y-4 pointer-events-none absolute left-0 w-px border-l border-neutral-800" />
        <div className="-inset-y-4 pointer-events-none absolute right-0 w-px border-r border-neutral-800" />

        {/* Content */}
        <div className="space-y-3 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl sm:text-2xl bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              {blog.title}
            </h2>
            {formattedDate && (
              <div className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wide flex items-center gap-1.5">
                <span className="text-neutral-600">•</span>
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
          <div className="relative">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
              {previewText}
            </p>
            {previewText !== blog.content && (
              <div className="mt-3 text-xs text-neutral-500 italic">
                Click to read more...
              </div>
            )}
          </div>
        </div>

        {/* Hover effect gradient */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-neutral-900/20 via-transparent to-transparent pointer-events-none rounded-xl" />
      </div>
    );
  };

  const BlogModal = ({ blog, onClose }) => {
    if (!blog) return null;
    const formattedDate = formatDateAndTime(blog);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        onClick={handleBackdropClick}
      >
          {/* Blurred backdrop sides */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(2px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 cursor-pointer"
            onClick={onClose}
          />

          {/* Clickable side areas */}
          <div className="absolute inset-0 flex items-center justify-center py-8 pointer-events-none">
            <div className="flex-1 pointer-events-auto cursor-pointer" onClick={onClose} />
            <div className="w-full max-w-4xl relative flex flex-col pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              {/* Blog content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300,
                  duration: 0.4 
                }}
                className="relative bg-black/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 mx-4 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent shadow-2xl shadow-black/50"
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 transition-colors duration-200 z-10"
                  aria-label="Close"
                >
                  <X className="size-5 text-neutral-400" />
                </button>

                {/* Blog content */}
                <div className="space-y-6 pr-8">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                      {blog.title}
                    </h1>
                    {formattedDate && (
                      <div className="text-sm text-neutral-500 font-medium tracking-wide flex items-center gap-2">
                        <span className="text-neutral-600">•</span>
                        <span>{formattedDate}</span>
                      </div>
                    )}
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                  <div className="prose prose-invert max-w-none">
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                      {blog.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 pointer-events-auto cursor-pointer" onClick={onClose} />
          </div>
        </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden py-8">
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Search Bar */}
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 size-4 group-focus-within:text-neutral-300 transition-colors duration-200" />
            <input
              type="text"
              placeholder="Search blogs by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md border border-neutral-800/80 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-600/50 focus:border-neutral-600 transition-all duration-300 hover:border-neutral-700 hover:bg-gradient-to-br hover:from-black/70 hover:to-black/50 shadow-lg shadow-black/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Sort Filter */}
          <div className="relative flex gap-2">
            <div className="relative group">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-5 py-3 pr-10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md border border-neutral-800/80 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-600/50 focus:border-neutral-600 cursor-pointer transition-all duration-300 hover:border-neutral-700 hover:bg-gradient-to-br hover:from-black/70 hover:to-black/50 shadow-lg shadow-black/20 appearance-none"
              >
                <option value="new-old" className="bg-black text-white">
                  Most Recent
                </option>
                <option value="old-new" className="bg-black text-white">
                  Oldest First
                </option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="size-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Blogs List */}
        <div className="space-y-4">
          {loading ? (
            <p className="text-center text-neutral-400 py-12">Loading blogs...</p>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))
          ) : (
            <p className="text-center text-neutral-400 py-12">
              {searchQuery ? "No blogs found matching your search." : "No blogs yet."}
            </p>
          )}
        </div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <BlogModal blog={selectedBlog} onClose={closeBlogModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogBook;
