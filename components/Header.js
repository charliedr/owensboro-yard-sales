import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  const [user, loading] = useAuthState(auth);
  //   console.log(user);

  return (
    <nav className=" w-full bg-[url('/hero_img.png')] bg-no-repeat bg-cover bg-center">
      <div className="h-full py-16 px-6 flex justify-between items-center bg-white bg-opacity-80">
        <Link href="/">
          <img
            src="../oys_logo.svg"
            alt="Owensboro Yard Sales"
            className="w-36"
          ></img>
        </Link>
        <ul className="justify-end">
          {!user && (
            <Link href={"/auth/login"}>
              <button className="py-2 px-6 text-sm rounded-lg font-medium">
                Sign Up / Log In
              </button>
            </Link>
          )}
          {user && (
            <div className="w-full flex justify-between items-center gap-6">
              <Link href="/dashboard">
                <img
                  src={user.photoURL}
                  className="w-10 rounded-full cursor-pointer"
                />
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
