import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const get = async (): Promise<any> => {
  const querySnapshot = await getDocs(collection(db, "products"));
  console.log(querySnapshot);

  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};
