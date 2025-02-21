import { Controller, Post, Body } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityDto } from './dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}
  @Post()
  createAvailability(@Body() dto:AvailabilityDto){
    return this.availabilityService.createAvailability(dto);
  }
}
