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
}
