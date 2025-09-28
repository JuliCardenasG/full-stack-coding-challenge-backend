import { Query, Resolver } from '@nestjs/graphql';
import { AirportService } from './airport.service';

@Resolver('Airport')
export class AirportResolver {
  constructor(private readonly airportService: AirportService) {}

  @Query('airports')
  async getAllAirports() {
    return this.airportService.getAllAirports();
  }
}
