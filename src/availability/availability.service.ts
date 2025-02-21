import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailabilityDto } from './dto';

@Injectable()
export class AvailabilityService {
    constructor(private prismaService:PrismaService) {}
    async createAvailability(dto:AvailabilityDto) {
        const availability= await this.prismaService.availability.create({
            data:{
                day:dto.day,
                startHour:dto.startHour,
                endHour:dto.endHour,
                teacherCin:dto.teacherCin,
            }
        });
        return availability;
    }
}
