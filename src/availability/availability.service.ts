import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AvailabilityDto } from './dto';

@Injectable()
export class AvailabilityService {
    constructor(private prismaService: PrismaService) { }
    async createAvailability(dtos: AvailabilityDto[], cin: string) {
        const teacher = await this.prismaService.teacher.findUnique({ where: { cin } });
        if (teacher == null) {
            throw new NotFoundException("this teacher doasn't exist");
        } else {
            const availability = await this.prismaService.availability.createMany({
                data: dtos.map(dto => ({
                    day: dto.day,
                    startHour: dto.startHour,
                    endHour: dto.endHour,
                    teacherCin: cin,
                }))
            });
            return availability;
        }
    }
    async updateAvailability(dto: AvailabilityDto, id: Object, cin: string) {
        const newId = id.toString();
        const availability = await this.prismaService.availability.findUnique({ where: { id: newId } });
        const teacher = await this.prismaService.teacher.findUnique({ where: { cin } });
        if (teacher == null) {
            throw new NotFoundException("this availability doasn't exist");
        }
        if (availability == null) {
            throw new NotFoundException("this availability doasn't exist");
        }
        const newAvailability = await this.prismaService.availability.update({
            where: {
                id: newId,
            },
            data: {
                day: dto.day,
                startHour: dto.startHour,
                endHour: dto.endHour,
                teacherCin: cin,
            }
        });
        return newAvailability;
    }
    async deleteAvaliability(id: string, cin: string) {
        const availability = await this.prismaService.availability.findUnique({ where: { id } });
        const teacher = await this.prismaService.teacher.findUnique({ where: { cin } });
        if (teacher == null) {
            throw new NotFoundException("this availability doasn't exist");
        }
        if (availability == null) {
            throw new NotFoundException("this availability doasn't exist");
        }
        await this.prismaService.availability.delete({ where: { id } });

        return 'Availability successfully deleted'
    }
}
