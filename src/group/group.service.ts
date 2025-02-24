import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prismaService: PrismaService) { }
  async create(dto: CreateGroupDto) {
    const student = await this.prismaService.group.create({
      data: {
        name: dto.name,
      }
    });
    return student;
  }

  async findAll() {
    const groups = await this.prismaService.group.findMany();
    return groups;
  }

  async findOne(name: string) {
    const group = await this.prismaService.group.findUnique({ where: { name } });
    if (group == null) {
      throw new NotFoundException("this group doesn't exist");
    }
    return group;
  }

  async update(name: string, updateGroupDto: UpdateGroupDto) {
    const group = await this.findOne(name);
    if (group == null) {
      return new NotFoundException("this group doasn't exist");
    }
    const newGroup = await this.prismaService.group.update({
      where: {
        name
      },
      data: {
        name: updateGroupDto.name
      }
    });
    return newGroup;
  }

  async remove(name: string) {
    const group = await this.findOne(name);
    if (group == null) {
      return new NotFoundException("this group doasn't exist");
    }
    await this.prismaService.group.delete({
      where: {
        name
      }
    });
    return `Group ${name} has been successfully deleted.`
  }
}
