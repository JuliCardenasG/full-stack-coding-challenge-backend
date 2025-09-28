
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

type Nullable<T> = T | null;
