/*
  Warnings:

  - Made the column `uid` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "uid" SET NOT NULL;

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "title" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HEPExercise" (
    "exerciseId" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,
    "frequency" TEXT,
    "duration" TEXT,
    "notes" TEXT,
    "assignedById" TEXT NOT NULL,

    CONSTRAINT "HEPExercise_pkey" PRIMARY KEY ("patientId","exerciseId")
);

-- CreateTable
CREATE TABLE "_ExerciseToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HEPExercise_assignedById_key" ON "HEPExercise"("assignedById");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToTag_AB_unique" ON "_ExerciseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToTag_B_index" ON "_ExerciseToTag"("B");

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HEPExercise" ADD CONSTRAINT "HEPExercise_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTag" ADD CONSTRAINT "_ExerciseToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTag" ADD CONSTRAINT "_ExerciseToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
