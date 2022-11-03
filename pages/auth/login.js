import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  // Get user
  const [user, loading] = useAuthState(auth);
  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Runs every time the user changes
  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("log in");
    }
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-8 text-gray-700 rounded-lg bg-gray">
      <h2 className="text-2xl font-medium">Join Today</h2>
      <h3 className="pt-2 pb-6">Sign in with one of the providers below:</h3>
      <button
        onClick={GoogleLogin}
        className="text-black bg-white w-full font-medium rounded-lg flex align-middle p-4 gap-4"
      >
        <FcGoogle className="text-2xl" /> Sign in with Google
      </button>
    </div>
  );
}
