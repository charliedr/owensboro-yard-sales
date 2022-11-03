import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Listing from "../components/listing";
import { BsTrash2Fill } from "react-icons/bs";

import Link from "next/link";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [listings, setListings] = useState([]);

  // Check if user is logged in, redirect if not
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
    const collectionRef = collection(db, "Listings");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setListings(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsubscribe;
  };

  // Delete post
  const deleteListing = async (id) => {
    const docRef = doc(db, "Listings", id);
    await deleteDoc(docRef);
  };

  // Get user's data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        {listings.map((listing) => {
          return (
            <Listing {...listing} key={listing.id}>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => deleteListing(listing.id)}
                  className="text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
                >
                  <BsTrash2Fill className="text-2xl text-red" />
                  <span className="text-red">Delete</span>
                </button>
                {/* With double curly brackets, you can pass the pathname + any data you want */}
                {/* <Link href={{ pathname: "/listing", query: listing }}>
                  <button className="text-teal-600 flex items-center justify-center gap-2 py-2 text-sm">
                    <AiFillEdit className="text-2xl" />
                    Edit
                  </button>
                </Link> */}
              </div>
            </Listing>
          );
        })}
      </div>
      <button
        onClick={() => auth.signOut()}
        className="text-sm font-medium bg-red text-white py-2 px-4 mt-10"
      >
        Sign Out
      </button>
    </div>
  );
}
