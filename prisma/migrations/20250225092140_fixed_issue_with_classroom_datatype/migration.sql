/*
  Warnings:

  - Changed the type of `number` on the `ClassRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `classRoomNumber` on the `Lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_classRoomNumber_fkey";

-- AlterTable
ALTER TABLE "ClassRoom" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "classRoomNumber",
ADD COLUMN     "classRoomNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClassRoom_number_key" ON "ClassRoom"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_classRoomNumber_key" ON "Lesson"("classRoomNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_groupId_teacherCin_subjectId_classRoomNumber_key" ON "Lesson"("groupId", "teacherCin", "subjectId", "classRoomNumber");

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_classRoomNumber_fkey" FOREIGN KEY ("classRoomNumber") REFERENCES "ClassRoom"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
