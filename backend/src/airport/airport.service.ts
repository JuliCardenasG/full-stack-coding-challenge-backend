import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AirportService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllAirports() {
    return this.prisma.airport.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async searchAirports(query: string) {
    return this.prisma.airport.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } },
          { iata: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }
}
