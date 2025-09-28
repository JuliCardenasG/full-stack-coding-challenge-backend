import { Args, Query, Resolver } from '@nestjs/graphql';
import { AirportService } from './airport.service';

@Resolver('Airport')
export class AirportResolver {
  constructor(private readonly airportService: AirportService) {}

  @Query('airports')
  async getAllAirports() {
    return this.airportService.getAllAirports();
  }

  @Query('searchAirports')
  async searchAirports(
    @Args('query') query: string,
    @Args('page', { defaultValue: 1 }) page: number,
  ) {
    return this.airportService.searchAirports(query, page);
  }
}
