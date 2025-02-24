import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto[]) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':cin')
  findOne(@Param('cin') cin: string) {
    return this.studentService.findOne(cin);
  }

  @Patch(':cin')
  update(@Param('cin') cin: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(cin, updateStudentDto);
  }

  @Delete(':cin')
  remove(@Param('cin') cin: string) {
    return this.studentService.remove(cin);
  }
}
