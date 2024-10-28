import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const createBlog = (blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, { id: Date.now().toString(), ...blog }]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs((prevBlogs) => prevBlogs.map((blog) => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
  };

  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, createBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
