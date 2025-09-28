import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/layout";
import useApiData from "../hooks/use-api-data";
import Airport from "../types/airport";
import { useAirports } from "../hooks/useAirports";

const Page: NextPage = () => {
  const { airports, loading, error } = useAirports();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {airports.map((airport) => (
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
        ))}
      </div>
    </Layout>
  );
};

export default Page;
