
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    hello(): string | Promise<string>;
    getSeaport(id: number): Nullable<Seaport> | Promise<Nullable<Seaport>>;
    airports(): Airport[] | Promise<Airport[]>;
    searchAirports(query: string, page?: Nullable<number>): PaginatedAirports | Promise<PaginatedAirports>;
    getAirport(iata: string): Nullable<Airport> | Promise<Nullable<Airport>>;
}

export interface Seaport {
    id: number;
    name: string;
    location?: Nullable<Location>;
}

export interface Location {
    city: string;
    countryAlpha2: string;
}

export interface Airport {
    id: number;
    name: string;
    iata: string;
    city: string;
    country: string;
    longitude: number;
    latitude: number;
}

export interface PaginatedAirports {
    airports: Airport[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

type Nullable<T> = T | null;
