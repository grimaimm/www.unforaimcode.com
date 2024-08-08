import 'react-toastify/dist/ReactToastify.css';
import { FetchBlogBySlug, UpdateBlogViews } from '../api/blog';
import { NextSeo } from 'next-seo';
import { ContainerCenter } from '@/common/components/elements/Container';
import { ToastContainer } from 'react-toastify';
import BlogDetails from '@/modules/blogPage/components/BlogDetails';
import BackButton from '@/common/components/elements/BackButton';
import fs from 'fs';
import path from 'path';
import { formatDate } from '@/common/utils/Date';


const BlogSlugDetailPage = ({ blog }) => {
  if (!blog) {
    return <div>No blog found</div>;
  }

  const canonicalUrl = `http://localhost:3000/blog/${blog.slug || ''}`;

  return (
    <>
      <NextSeo
        title={`${blog?.title} - Blog Muhammad Rahim`}
        description={blog?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blog?.published ? formatDate(blog.published) : 'Date not available',
            modifiedTime: blog?.published ? formatDate(blog.published) : 'Date not available',
            authors: ['Muhammad Rahim'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blog?.image,
            },
          ],
          siteName: 'Blog Muhammad Rahim',
        }}
      />
      <ContainerCenter data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetails blog={blog} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ContainerCenter>
    </>
  );
};


export async function getServerSideProps({ params }) {
  const { slug } = params;
  const blogs = await FetchBlogBySlug(slug);

  if (blogs.length === 0) {
    return { notFound: true };
  }

  const blog = blogs[0];
  if (blog.published?.toDate) {
    blog.published = blog.published.toDate().toISOString();
  }

  await UpdateBlogViews(blog.id);

  const filePath = path.join(process.cwd(), 'src', 'contents', 'blog', `${slug}.md`);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    blog.content = content;
    return { props: { blog } };
  } catch (error) {
    return {
      notFound: true, // Mengembalikan halaman 404 jika file tidak ditemukan
    };
  }
}

export default BlogSlugDetailPage;