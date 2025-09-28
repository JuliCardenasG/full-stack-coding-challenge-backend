import { gql } from "@apollo/client";

export const GET_AIRPORTS = gql`
  query GetAirports {
    airports {
      id
      name
      iata
      city
      country
      longitude
      latitude
    }
  }
`

export const SEARCH_AIRPORTS = gql`
  query SearchAirports($query: String!) {
    searchAirports(query: $query) {
      id
      name
      iata
      city
      country
    }
  }
`
