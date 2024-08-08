import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/common/libs/firebase";

// Fungsi untuk mengkonversi Timestamp ke string ISO
const convertTimestamps = (projects) =>
  projects.map(project => ({
    ...project,
    updated_at: project.updated_at?.toDate().toISOString(),
  }));

// Fungsi untuk mengambil semua proyek dari Firestore
// export const FetchProjects = async () => {
//   try {
//     const q = query(
//       collection(db, 'Projects'),
//       orderBy('is_featured', 'desc'),
//       orderBy('updated_at', 'desc')
//     );
//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     return [];
//   }
// };
export const FetchProjects = async () => {
  try {
    const q = query(
      collection(db, 'Projects'),
      orderBy('is_featured', 'desc'),
      orderBy('updated_at', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return convertTimestamps(projects); // Konversi timestamps
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Fungsi untuk mengambil proyek berdasarkan slug
export const FetchProjectBySlug = async (slug) => {
  try {
    const q = query(collection(db, 'Projects'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return [];
  }
};