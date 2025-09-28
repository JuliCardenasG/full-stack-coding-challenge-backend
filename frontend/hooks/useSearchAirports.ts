import { useQuery } from "@apollo/client";
import { SEARCH_AIRPORTS } from "../graphql/queries/airports";

export const useSearchAirports = (query: string) => {
  const { data, loading, error } = useQuery(SEARCH_AIRPORTS, {
    variables: { query },
    // skip: query.trim() === "",
  });

  return { airports: data?.searchAirports || [], loading, error };
}