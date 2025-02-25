import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(private prismaService: PrismaService) {}
  async create(dtos: CreateSubjectDto[]) {
    const subjects = await this.prismaService.subject.createMany({
      data: dtos.map(dto => ({
        name: dto.name,
        creditHours: dto.creditHours,
        pricePerHour: dto.pricePerHour,
        studyPlan: dto.studyPlan,
        groupeName: dto.groupName,
        teacherCin:dto.teacherCin
      }))
    })
    return subjects;
  }
  async findAll() {
    return await this.prismaService.subject.findMany();
  }
  async findOne(id: string) {
    const subject = await this.prismaService.subject.findUnique({ where: { id } });
    if (subject == null) {
      throw new NotFoundException("this subject doasn't exist");
    }
    return subject;
  }
  async update(id: string, dto: UpdateSubjectDto) {
    const subjectExist = await this.findOne(id);
    if (subjectExist == null) {
      throw new NotFoundException("this subject doasn't exist");
    }
    const subject = await this.prismaService.subject.update({
      where: {
        id
      },
      data: {
        name: dto.name,
        creditHours: dto.creditHours,
        studyPlan: dto.studyPlan,
        pricePerHour:dto.pricePerHour,
        groupeName: dto.groupName,
        teacherCin: dto.teacherCin
      }
    })
    return subject;
  }
  async remove(id: string) {
    const subject = this.findOne(id);
    if (subject == null) {
      throw new NotFoundException("this subject doasn't exist");
    }
    await this.prismaService.subject.delete({ where: { id } });
    return { message: `subject with id ${id} has been successfully deleted.` };
  }
}
