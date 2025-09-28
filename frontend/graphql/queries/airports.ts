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
