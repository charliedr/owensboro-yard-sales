import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaSign } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ImRoad } from "react-icons/im";

export default function Navbar() {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      {!user}
      {user && (
        <nav className="w-full fixed z-50 bottom-0 flex justify-evenly pt-3 pb-2 bg-white shadow-inner">
          <Link href="/" className="flex flex-col">
            <FaSign className="text-xl self-center mb-1 text-blue" />
            <span className="text-sm font-medium">Yard Sales</span>
          </Link>
          <Link href="/add-listing" className="flex flex-col">
            <BsFillPlusCircleFill className="text-xl self-center mb-1 text-blue" />
            <span className="text-sm font-medium">Add a Sale</span>
          </Link>
          <Link href="/roadmap" className="flex flex-col">
            <ImRoad className="text-xl self-center mb-1 text-blue" />
            <span className="text-sm font-medium">Dev Roadmap</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
