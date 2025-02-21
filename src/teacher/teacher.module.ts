import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { AvailabilityModule } from 'src/availability/availability.module';

@Module({
  controllers: [TeacherController],
  imports:[AvailabilityModule],
  providers: [TeacherService],
})
export class TeacherModule {}
