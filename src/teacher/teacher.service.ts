import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private prismaService: PrismaService) { }
  async create(dtos: CreateTeacherDto[]) {
    const teacher = await this.prismaService.teacher.createMany({
      data: dtos.map(dto => ({
        cin: dto.cin,
        name: dto.name,
        email: dto.email,
        password: dto.password,
        phoneNumber: dto.phoneNumber,
      }))
    });
    return teacher;
  }
  async findAll() {
    return await this.prismaService.teacher.findMany();
  }
  
  async findOne(cin: string) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        cin
      }
    });
    if (teacher == null) {
      throw new NotFoundException("this Teacher doasn't exist");
    }
    return teacher;
  }
  async update(cin: string, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.findOne(cin);
    if (teacher == null) {
      throw new NotFoundException("this Teacher doasn't exist");
    }
    return await this.prismaService.teacher.update({
      where: {
        cin
      },
      data: {
        cin: updateTeacherDto.cin,
        email: updateTeacherDto.email,
        name: updateTeacherDto.name,
        phoneNumber: updateTeacherDto.phoneNumber,
        password: updateTeacherDto.password,
      }
    });
  }
  async remove(cin: string) {
    const teacher = await this.findOne(cin);
    if (teacher == null) {
      throw new NotFoundException("this Teacher doasn't exist");
    }
    await this.prismaService.availability.deleteMany({
      where: {
        teacherCin: cin
      }
    });
    await this.prismaService.teacher.delete({
      where: {
        cin
      }
    });
    return `Teacher with CIN ${cin} has been successfully deleted.`;
  }
}
