import { useQuery } from "@apollo/client";
import { GET_AIRPORT } from "../graphql/queries/airports";

export const useAirport = (iata: string) => {
  const { data, loading, error } = useQuery(GET_AIRPORT, {
    variables: { iata },
  });

  return {
    airport: data ? data.getAirport : null,
    loading,
    error,
  }
}