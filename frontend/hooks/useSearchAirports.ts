import { useQuery } from "@apollo/client";
import { SEARCH_AIRPORTS } from "../graphql/queries/airports";

export const useSearchAirports = (query: string, page = 1) => {
  const { data, loading, error, refetch } = useQuery(SEARCH_AIRPORTS, {
    variables: { query, page },
  });

  return {
    airports: data?.searchAirports?.airports || [],
    totalCount: data?.searchAirports?.totalCount,
    totalPages: data?.searchAirports?.totalPages,
    currentPage: data?.searchAirports?.currentPage,
    hasNextPage: data?.searchAirports?.hasNextPage,
    hasPreviousPage: data?.searchAirports?.hasPreviousPage,
    loading,
    error,
    refetch
  };
}