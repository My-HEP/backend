/*
  Warnings:

  - The primary key for the `HEPExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `patientId` on the `HEPExercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `assignedById` on the `HEPExercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "HEPExercise" DROP CONSTRAINT "HEPExercise_assignedById_fkey";

-- DropForeignKey
ALTER TABLE "HEPExercise" DROP CONSTRAINT "HEPExercise_patientId_fkey";

-- DropIndex
DROP INDEX "User_uid_key";

-- AlterTable
ALTER TABLE "HEPExercise" DROP CONSTRAINT "HEPExercise_pkey",
DROP COLUMN "patientId",
ADD COLUMN     "patientId" INTEGER NOT NULL,
DROP COLUMN "assignedById",
ADD COLUMN     "assignedById" INTEGER NOT NULL,
ADD CONSTRAINT "HEPExercise_pkey" PRIMARY KEY ("patientId", "exerciseId");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "uid" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HEPExercise_assignedById_key" ON "HEPExercise"("assignedById");

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
