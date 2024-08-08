import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/common/libs/firebase';

// Fungsi untuk mengambil semua pagespeed dari Firestore
export const FetchPagespeed = async () => {
  try {
    const PagespeedsCollection = collection(db, 'Pagespeed');
    const PagespeedsSnapshot = await getDocs(PagespeedsCollection);
    const PagespeedList = PagespeedsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return PagespeedList;
  } catch (error) {
    console.error('Error fetching Pagespeeds:', error);
    return [];
  }
};

export default async function handler(req, res) {
  try {
    const pagespeedData = await FetchPagespeed();
    res.status(200).json(pagespeedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}
