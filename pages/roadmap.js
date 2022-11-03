import Head from "next/head";
import Link from "next/link";

// TO DO
// Automatically delete listings older than x days
// "Follow" listings
// Map of listings

export default function Roadmap() {
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
        <h1 className="text-2xl font-bold">Development Roadmap</h1>
        <p className="mt-2 mb-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <ul className="list-inside">
          <li className="list-disc">Automatically delete past listings</li>
          <li className="list-disc">Add ability to "follow" listings</li>
          <li className="list-disc">Map of listings</li>
        </ul>
      </main>
    </div>
  );
}
