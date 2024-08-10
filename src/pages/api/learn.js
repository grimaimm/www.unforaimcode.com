import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
  increment,
  orderBy,
} from 'firebase/firestore';
import { firestore } from '@/common/libs/firebase';

const convertTimestamps = (learns) =>
  learns.map((learn) => ({
    ...learn,
    published: learn.published?.toDate().toISOString(),
  }));

export const FetchLearns = async () => {
  try {
    const LearnCollection = collection(firestore, 'Learn');
    const LearnSnapshot = await getDocs(LearnCollection);
    const LearnList = LearnSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return LearnList;
  } catch (error) {
    console.error('Error fetching learns:', error);
    return [];
  }
};

export const FetchLearnBySlug = async (slug) => {
  try {
    const q = query(collection(firestore, 'Learn'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching Learn by slug:', error);
    return [];
  }
};
