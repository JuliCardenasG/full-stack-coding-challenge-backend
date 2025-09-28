import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AirportService {
  private readonly AIRPORT_PAGE_SIZE = 20;
  constructor(private readonly prisma: PrismaClient) {}

  async getAllAirports() {
    return this.prisma.airport.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getAirport(iata: string) {
    return this.prisma.airport.findUnique({
      where: { iata: iata.toUpperCase() },
    });
  }

  async searchAirports(query: string, page = 1) {
    const totalCount = await this.prisma.airport.count({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } },
          { iata: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    const airports = await this.prisma.airport.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } },
          { iata: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: this.AIRPORT_PAGE_SIZE,
      skip: (page - 1) * this.AIRPORT_PAGE_SIZE,
      orderBy: { name: 'asc' },
    });

    return {
      airports,
      totalCount,
      totalPages: Math.ceil(totalCount / this.AIRPORT_PAGE_SIZE),
      currentPage: page,
      hasNextPage: totalCount > page * this.AIRPORT_PAGE_SIZE,
      hasPreviousPage: page > 1,
    };
  }
}
