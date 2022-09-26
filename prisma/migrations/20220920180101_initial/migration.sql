-- CreateEnum
CREATE TYPE "Role" AS ENUM ('THERAPIST', 'PATIENT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PATIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
