/*
  Warnings:

  - You are about to drop the column `groupId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_groupId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "groupId",
ADD COLUMN     "groupName" TEXT;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupName_fkey" FOREIGN KEY ("groupName") REFERENCES "Group"("name") ON DELETE SET NULL ON UPDATE CASCADE;
