/*
  Warnings:

  - You are about to drop the column `groupId` on the `Subject` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_groupId_fkey";

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "groupId",
ADD COLUMN     "groupeName" TEXT;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_groupeName_fkey" FOREIGN KEY ("groupeName") REFERENCES "Group"("name") ON DELETE SET NULL ON UPDATE CASCADE;
