/*
  Warnings:

  - You are about to drop the column `frequency` on the `HEPExercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HEPExercise" DROP COLUMN "frequency",
ADD COLUMN     "durationUnits" TEXT,
ADD COLUMN     "frequencyByDay" TEXT,
ADD COLUMN     "frequencyByWeek" TEXT;
