-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_groupId_fkey";

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("name") ON DELETE SET NULL ON UPDATE CASCADE;
