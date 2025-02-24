-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_teacherCin_fkey";

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "teacherCin" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_teacherCin_fkey" FOREIGN KEY ("teacherCin") REFERENCES "Teacher"("cin") ON DELETE SET NULL ON UPDATE CASCADE;
