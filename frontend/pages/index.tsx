import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/layout";
import { useState } from "react";
import { useSearchAirports } from "../hooks/useSearchAirports";

const Page: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    airports,
    totalCount,
    totalPages,
    currentPage,
    hasNextPage,
    hasPreviousPage,
    error,
    refetch,
  } = useSearchAirports(searchTerm);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <input
        type="text"
        placeholder="Start typing..."
        className="p-2 border border-gray-300 rounded w-full bg-gray-100 py-2 mt-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="mt-10 text-xl font-semibold">
        Airports
        <span className="rounded-lg bg-blue-400 text-sm text-white px-2 py-1 ml-3">
          {totalCount}
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {airports
          ? airports.map((airport) => (
              <Link
                className="flex items-center p-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
                href={`/airports/${airport.iata.toLowerCase()}`}
                key={airport.iata}
              >
                <div className="flex flex-col gap-4">
                  <span>
                    {airport.name}, {airport.city}
                  </span>
                  <span className="text-gray-500">{airport.country}</span>
                </div>
              </Link>
            ))
          : null}
      </div>
      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-4 mt-10">
          {hasPreviousPage ? (
            <button onClick={() => refetch({ page: currentPage - 1 })}>
              Previous
            </button>
          ) : null}
          <span>
            Page {currentPage} of {totalPages}
          </span>
          {hasNextPage ? (
            <button onClick={() => refetch({ page: currentPage + 1 })}>
              Next
            </button>
          ) : null}
        </div>
      ) : null}
    </Layout>
  );
};

export default Page;
