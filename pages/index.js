import Head from "next/head";
import Listing from "../components/listing";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import Link from "next/link";

// import Link from "next/link";

// TO DO
// Automatically delete listings older than x days
// "Follow" listings
// Map of listings

export default function Home() {
  // Create a state with all listings
  const [allListings, setAllListings] = useState([]);

  const getListings = async () => {
    const collectionRef = collection(db, "Listings");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllListings(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      <Head>
        <title>Owensboro Yard Sales</title>
        <meta
          name="description"
          content="View upcoming yard sales in Owensboro, KY."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold mb-6">Upcoming Yard Sales</h1>
        {allListings.map((listing) => (
          <Listing {...listing} key={listing.id} />
        ))}
      </main>
    </div>
  );
}
