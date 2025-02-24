/*
  Warnings:

  - You are about to drop the column `subjectId` on the `Group` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_subjectId_fkey";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "subjectId";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "groupId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
