import Link from "next/link";

export default function Listing({
  children,
  avatar,
  username,
  contents,
  address,
  city,
  startDate,
  endDate,
}) {
  return (
    <div className="flex flex-col bg-white p-6 mb-6 shadow-md rounded-lg">
      {/* <div className="mb-2">
        <img src={avatar} className="w-10 rounded-full"></img>
        <h2>{username}</h2>
      </div> */}
      <div className="mb-2">
        <h3 className="text-md font-semibold text-blue">Address</h3>
        <span className="text-sm">{address}, </span>
        <span className="text-sm">{city}</span>
      </div>
      <div className="flex gap-4">
        <div className="mb-2">
          <h3 className="text-md font-semibold text-blue">Start Date</h3>
          <p className="text-sm">{startDate}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-md font-semibold text-blue">End Date</h3>
          <p className="text-sm">{endDate}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold text-blue">Contents</h3>
        <p className="text-sm">{contents}</p>
      </div>
      <Link
        href={`https://www.google.com/maps/place/${address.toLowerCase()},+${city.toLowerCase()}`}
        target="_blank"
      >
        <button className="w-full md:w-auto bg-blue border-2 border-blue font-medium py-2 px-4 rounded-lg text-sm">
          Get Directions
        </button>
      </Link>

      {children}
    </div>
  );
}
