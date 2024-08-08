// pages/api/blog.js
import { collection, getDocs, query, where, doc, updateDoc, getDoc, increment, orderBy } from 'firebase/firestore';
import { db } from "@/common/libs/firebase";

const convertTimestamps = (blogs) =>
  blogs.map(blog => ({
    ...blog,
    published: blog.published?.toDate().toISOString(),
  }));

// Fungsi untuk mengambil semua blog dari Firestore
// export const FetchBlogs = async () => {
//   try {
//     const BlogsCollection = collection(db, "Blogs");
//     const BlogsSnapshot = await getDocs(BlogsCollection);
//     const BlogtList = BlogsSnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));

//     // console.log("Fetched Blogs:", BlogtList); // Log data untuk debugging
//     return convertTimestamps(BlogtList);
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return [];
//   }
// };

export const FetchBlogs = async () => {
  try {
    const BlogsCollection = query(
      collection(db, 'Blogs'),
      orderBy('published', 'desc')
    );
    const BlogsSnapshot = await getDocs(BlogsCollection);
    const BlogtList = BlogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return convertTimestamps(BlogtList); // Konversi timestamps
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};


// Fungsi untuk mengambil Blog berdasarkan slug
export const FetchBlogBySlug = async (slug) => {
  try {
    const q = query(collection(db, 'Blogs'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching Blog by slug:', error);
    return [];
  }
};

// Fungsi untuk memperbarui total views blog
export const UpdateBlogViews = async (id) => {
  try {
    const blogRef = doc(db, 'Blogs', id);
    await updateDoc(blogRef, {
      total_views: increment(1),
    });
  } catch (error) {
    console.error('Error updating blog views:', error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, action } = req.body; // Include 'action' in the destructuring assignment

    try {
      const blogRef = doc(db, 'Blogs', id);

      if (action === 'like') {
        await updateDoc(blogRef, {
          likes: increment(1),
        });
        res.status(200).json({ message: 'Like updated successfully' });
      } else if (action === 'dislike') {
        await updateDoc(blogRef, {
          dislikes: increment(1),
        });
        res.status(200).json({ message: 'Dislike updated successfully' });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      console.error('Error updating blog likes/dislikes:', error);
      res.status(500).json({ message: 'Error updating blog likes/dislikes' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { id } = req.body;

//     try {
//       const blogRef = doc(db, 'Blogs', id);
//       await updateDoc(blogRef, {
//         likes: increment(1),
//         dislikes: increment(1),
//       });

//       res.status(200).json({ message: 'Like updated successfully' });
//     } catch (error) {
//       console.error('Error updating blog likes:', error);
//       res.status(500).json({ message: 'Error updating blog likes' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// Fungsi untuk memperbarui total views
// export const updateBlogViews = async (id) => {
//   try {
//     const blogRef = doc(db, "Blogs", id);
//     const blogSnap = await getDoc(blogRef);

//     if (blogSnap.exists()) {
//       const blogData = blogSnap.data();
//       const newViews = (blogData.total_views || 0) + 1;

//       await updateDoc(blogRef, {
//         total_views: newViews
//       });

//       return { ...blogData, total_views: newViews };
//     } else {
//       console.error('No such document!');
//     }
//   } catch (error) {
//     console.error('Error updating blog views:', error);
//   }
// };