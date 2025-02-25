/*
  Warnings:

  - The primary key for the `ClassRoom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ClassRoom` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ClassRoom` table. All the data in the column will be lost.
  - You are about to drop the column `classRoomId` on the `Lesson` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `ClassRoom` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classRoomNumber]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groupId,teacherCin,subjectId,classRoomNumber]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `ClassRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classRoomNumber` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_classRoomId_fkey";

-- DropIndex
DROP INDEX "Lesson_classRoomId_key";

-- DropIndex
DROP INDEX "Lesson_groupId_teacherCin_subjectId_classRoomId_key";

-- AlterTable
ALTER TABLE "ClassRoom" DROP CONSTRAINT "ClassRoom_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "classRoomId",
ADD COLUMN     "classRoomNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClassRoom_number_key" ON "ClassRoom"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_classRoomNumber_key" ON "Lesson"("classRoomNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_groupId_teacherCin_subjectId_classRoomNumber_key" ON "Lesson"("groupId", "teacherCin", "subjectId", "classRoomNumber");

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_classRoomNumber_fkey" FOREIGN KEY ("classRoomNumber") REFERENCES "ClassRoom"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
