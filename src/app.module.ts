import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvailabilityModule } from './availability/availability.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { ClassroomModule } from './classroom/classroom.module';

@Module({
  imports: [TeacherModule,PrismaModule,AvailabilityModule, SubjectModule, StudentModule, GroupModule, ClassroomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
