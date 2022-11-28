/*
  Warnings:

  - A unique constraint covering the columns `[patientId,exerciseId]` on the table `HEPExercise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HEPExercise_patientId_exerciseId_key" ON "HEPExercise"("patientId", "exerciseId");
