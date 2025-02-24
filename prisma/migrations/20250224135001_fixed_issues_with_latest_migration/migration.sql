-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_groupId_fkey";

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
