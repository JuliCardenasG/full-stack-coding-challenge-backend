import { useQuery } from "@apollo/client";
import { GET_AIRPORTS } from "../graphql/queries/airports";

export const useAirports = () => {
  const { data, loading, error } = useQuery(GET_AIRPORTS);

  return {
    airports: data ? data.airports : [],
    loading,
    error,
  }
}