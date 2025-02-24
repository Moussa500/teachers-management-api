import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { group } from 'console';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) { }
  async create(dtos: CreateStudentDto[]) {
    const students = await this.prismaService.student.createMany({
      data: dtos.map(dto => ({
        cin: dto.cin,
        name: dto.name,
        groupName: dto.groupName,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
      }))
    })
    return students;
  }
  async findAll() {
    return await this.prismaService.student.findMany();
  }
  async findOne(cin: string) {
    const student = await this.prismaService.student.findUnique({ where: { cin } });
    if (student == null) {
      throw new NotFoundException("this student doasn't exist");
    }
    return student;
  }
  async update(cin: string, dto: UpdateStudentDto) {
    const studentExist = await this.findOne(cin);
    if (studentExist == null) {
      throw new NotFoundException("this student doasn't exist");
    }
    console.log(dto.groupName);
    const student = await this.prismaService.student.update({
      where: {
        cin
      },
      data: {
        cin: dto.cin,
        name: dto.name,
        email: dto.email,
        groupName: dto.groupName,
        phoneNumber: dto.phoneNumber,
      }
    })
    return student;
  }
  async remove(cin: string) {
    const student = this.findOne(cin);
    if (student == null) {
      throw new NotFoundException("this student doasn't exist");
    }
    await this.prismaService.student.delete({ where: { cin } });
    return { message: `Student with CIN ${cin} has been successfully deleted.` };
  }
}
