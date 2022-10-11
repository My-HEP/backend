/*
  Warnings:

  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HEPExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "HEPExercise" DROP CONSTRAINT "HEPExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToTag" DROP CONSTRAINT "_ExerciseToTag_A_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Exercise_id_seq";

-- AlterTable
ALTER TABLE "HEPExercise" DROP CONSTRAINT "HEPExercise_pkey",
ALTER COLUMN "exerciseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "HEPExercise_pkey" PRIMARY KEY ("patientId", "exerciseId");

-- AlterTable
ALTER TABLE "_ExerciseToTag" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTag" ADD CONSTRAINT "_ExerciseToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
