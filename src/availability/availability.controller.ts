import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityDto } from './dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) { }
  @Post(":cin")
  createAvailability(@Body() dto: AvailabilityDto[], @Param('cin') cin: string) {
    return this.availabilityService.createAvailability(dto, cin);
  }
  @Patch(":id/:cin")
  async updateAvailability(@Body() dto: AvailabilityDto, @Param('id') id: Object, @Param('cin') cin: string) {
    console.log(id);
    return this.availabilityService.updateAvailability(dto, id, cin);
  }
  @Delete(":id/:cin")
  async deleteAvailability(@Param('id') id: string, @Param('cin') cin: string) {
    console.log(id);
    return this.availabilityService.deleteAvaliability(id, cin);
  }
}
