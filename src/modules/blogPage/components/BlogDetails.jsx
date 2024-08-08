import React, { useState } from 'react';
import BlogHeader from './BlogHeader';
import { calculateReadingTime } from '@/common/helpers';
import TableOfContents from '@/common/components/elements/TableOfContents';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';
import MDBlogContent from './MDBlogContent';
import Card from '@/common/components/elements/Card';
import Button from '@/common/components/elements/Button';
import { AiOutlineLike as Like } from "react-icons/ai";
import { AiOutlineDislike as Dislike } from "react-icons/ai";
import { PiSmileySad as Sad } from "react-icons/pi";
import { HiOutlineShare as Share } from "react-icons/hi";
import { toast } from 'react-toastify';

const BlogDetails = ({ blog }) => {
  const readingTimeMinutes = calculateReadingTime(blog.content);

  // Extract headings for TableOfContents
  const headings = blog.content.split('\n').map((line, index) => {
    if (line.startsWith('> ')) {
      return { id: `blockquote-${index + 1}`, text: line.slice(2) };
    }
    return null;
  }).filter(Boolean);

  const [activeSection, setActiveSection] = useState(null);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dislikes, setDislikes] = useState(blog.dislikes || 0);
  const [isSad, setIsSad] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleLike = async () => {
    try {
      // Trigger animation
      setIsAnimating(true);
      setShowFireworks(true);

      // Make an API request to update likes
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blog.id, action: 'like' }),
      });

      if (response.ok) {
        setLikes(likes + 1);
      } else {
        console.error('Failed to update likes');
      }
    } catch (error) {
      console.error('Error liking the blog:', error);
    } finally {
      // Remove animation class after animation completes
      setTimeout(() => {
        setIsAnimating(false);
        setShowFireworks(false);
      }, 800); // Match this duration with your CSS animation
    }
  };

  const handleDislike = async () => {
    try {
      // Trigger sad animation
      setIsSad(true);

      // Make an API request to update dislikes
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blog.id, action: 'dislike' }),
      });

      if (response.ok) {
        setDislikes(dislikes + 1);
      } else {
        console.error('Failed to update dislikes');
      }
    } catch (error) {
      console.error('Error disliking the blog:', error);
    } finally {
      // Remove sad animation class after animation completes
      setTimeout(() => {
        setIsSad(false);
      }, 1000); // Match this duration with your CSS animation
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: 'Check out this blog post!',
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => {
          console.error('Error sharing:', error);
          toast.error('Error sharing the blog', {
            className: 'custom-toast-error dark:custom-toast-error-dark',
          });
        });
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast.success('Link copied to clipboard!', {
            className: 'custom-toast-success dark:custom-toast-success-dark',
          });
        })
        .catch((error) => {
          console.error('Failed to copy link:', error);
          toast.error('Failed to copy link', {
            className: 'custom-toast-error dark:custom-toast-error-dark',
          });
        });
    }
  };

  return (
    <>
      <BlogHeader
        title={blog.title}
        reading_time_minutes={readingTimeMinutes}
        published={blog.published}
        total_views={blog.total_views}
      />
      <CloudinaryImage
        publicId={blog.cloudinary}
        alt={blog.title}
        width={1200}
        height={(1200 * 2) / 4.9}
        className="rounded-xl max-sm:h-[176px]"
      />
      <section className='lg:grid lg:grid-cols-[auto,250px] lg:gap-8 md:mt-6 mt-6'>
        <main>
          <div className='space-y-6 leading-[1.8] dark:text-zinc-300'>
            <MDBlogContent content={blog.content} />
          </div>
          <div className='my-10 space-y-2'>
            <h6 className='text-lg font-medium'>Tags:</h6>
            <div className='flex flex-wrap gap-2 pt-2'>
              {blog.tags_list?.map((tag, index) => (
                <div
                  key={index}
                  className='rounded-full bg-zinc-200 px-4 py-1 text-[14px] font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200'
                >
                  <span className='mr-1 font-semibold'>#</span>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <Card className="border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 p-4 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50">
            <div className="flex items-center space-x-2">
              <h3>Enjoyed the Blog?</h3>
            </div>
            <p className="mt-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              If you found this blog post valuable, please consider sharing it with others who might enjoy it. We appreciate your feedback and support!
            </p>
            <div className='flex gap-2 flex-row relative'>
              <Button
                className='px-4 py-2 text-sm relative'
                data-umami-event='Click Contact Button'
                onClick={handleLike}
              >
                {showFireworks && <span className='fireworks'></span>}
                <span className={isAnimating ? 'animate-like' : ''}>
                  <Like size={20} />
                </span>
                {likes} Likes
              </Button>
              <Button
                className='px-4 py-2 text-sm'
                data-umami-event='Click Dislike Button'
                onClick={handleDislike}
              >
                <span className={isSad ? 'animate-sad' : ''}>
                  {isSad ? <Sad size={20} /> : <Dislike size={20} />}
                </span>
              </Button>
              <button
                type="button"
                data-umami-event='Click Share Button'
                className="
                  px-4 py-2 text-sm
                  share-button dark:text-zinc-300 text-zinc-600 
                  border dark:border-zinc-600 border-zinc-300
                  dark:bg-zinc-800 bg-zinc-100 rounded-lg"
                onClick={handleShare}
              >
                <span className="button__text">Share</span>
                <span className="button__icon bg-zinc-200 dark:bg-zinc-700">
                  <Share size={20} />
                </span>
              </button>
            </div>
          </Card>
        </main>
        <aside className='mt-10 md:mt-0'>
          <TableOfContents
            headings={headings}
            activeSection={activeSection}
            onClick={setActiveSection}
          />
        </aside>
      </section>
    </>
  );
};

export default BlogDetails;
