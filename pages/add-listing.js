import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { toast, Toast } from "react-toastify";
import Link from "next/link";

export default function AddListing() {
  // Form state
  const [listing, setListing] = useState({
    contents: "",
    address: "",
    city: "",
    startDate: "",
    endDate: "",
  });
  // Update Firestore rule from false to if request.auth != null
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;

  // Submit listing
  const submitListing = async (e) => {
    e.preventDefault();

    // Run checks for contents
    if (!listing.contents) {
      toast.error("Contents field is empty.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });

      return;
    }
    if (listing.contents.length > 280) {
      toast.error("Contents is too long.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });

      return;
    }

    if (listing?.hasOwnProperty("id")) {
      const docRef = doc(db, "listings", listing.id);
      const updatedlisting = { ...listing, timestamp: serverTimestamp() };
      await updateDoc(docRef, updatedlisting);
      return route.push("/");
    } else {
      // Make a new listing
      const collectionRef = collection(db, "Listings");
      await addDoc(collectionRef, {
        ...listing,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      });
      setListing({ contents: "" });
      toast.success("Your listing has been added!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      // Redirect to the home page after listing submission
      return route.push("/");
    }
  };

  // Check our user
  const checkUser = async () => {
    if (loading) return;
    if (!user) route.push("/auth/login");
    if (routeData.id) {
      setListing({
        contents: routeData.contents,
        address: routeData.address,
        id: routeData.id,
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, [user, loading]);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {listing.hasOwnProperty("id")
          ? "Edit your listing"
          : "Add Your Yard Sale"}
      </h1>
      <p className="text-xs mt-1 mb-6">
        We reserve the right to remove your post should it contain content
        violating our{" "}
        <Link href="/" target="_blank" className="underline">
          rules
        </Link>
        .
      </p>

      <form
        onSubmit={submitListing}
        className="p-6 shadow-lg rounded-lg max-w-md mx-auto"
      >
        {/* ADDRESS */}
        <div className="py-2">
          <label for="address" className="text-md text-blue font-medium py-2">
            Street Address
          </label>
          <input
            id="address"
            value={listing.address}
            onChange={(e) =>
              setListing({ ...listing, address: e.target.value })
            }
            className="bg-gray w-full rounded-lg p-2 mb-2 text-sm"
          ></input>
          <label for="city" className="text-md text-blue font-medium py-2">
            City
          </label>
          <input
            id="city"
            value={listing.city}
            onChange={(e) => setListing({ ...listing, city: e.target.value })}
            className="bg-gray w-full rounded-lg p-2 mb-2 text-sm"
          ></input>

          {/* DATES */}
          <div className="flex space-between gap-4">
            {/* START DATE */}
            <div className="flex flex-col w-1/2">
              <label for="startDate" className="text-md text-blue font-medium ">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                onChange={(e) =>
                  setListing({ ...listing, startDate: e.target.value })
                }
                className="text-sm mb-2 p-2 font-medium bg-gray"
              ></input>
            </div>

            {/* END DATE */}
            <div className="flex flex-col w-1/2">
              <label for="endDate" className="text-md text-blue font-medium">
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                onChange={(e) =>
                  setListing({ ...listing, endDate: e.target.value })
                }
                className="text-sm mb-2 p-2 font-medium bg-gray"
              ></input>
            </div>
          </div>

          {/* YARD SALE CONTENTS */}
          <label for="content" className="text-md text-blue font-medium ">
            What's in your yard sale?
          </label>
          <textarea
            id="content"
            value={listing.contents}
            onChange={(e) =>
              setListing({ ...listing, contents: e.target.value })
            }
            className="bg-gray h-32 w-full rounded-lg p-2 text-sm"
          ></textarea>
          <p
            className={` font-medium text-sm ${
              listing.contents.length > 280 ? "text-red-600" : ""
            }`}
          >
            {listing.contents.length}/280
          </p>
        </div>
        <button
          type="submit"
          value="Submit"
          className="w-full bg-blue font-medium p-2 my-2 rounded-lg text-sm"
        >
          Submit Your Listing
        </button>
      </form>
    </div>
  );
}
