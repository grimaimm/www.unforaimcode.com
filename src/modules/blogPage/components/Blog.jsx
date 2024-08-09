import React from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { FetchBlogs } from '@/pages/api/blog';

export async function getServerSideProps() {
  const blogs = await FetchBlogs();

  return {
    props: {
      blogs,
    },
  };
}

const Blog = ({ blogs }) => {
  if (!Array.isArray(blogs)) {
    return <div>No blogs available.</div>;
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='grid gap-5 pb-5 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-2'>
        {blogs.map((blog, index) => (
          <motion.div key={index}>
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
