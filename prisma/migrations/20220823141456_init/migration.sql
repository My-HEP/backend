-- CreateTable
CREATE TABLE "HelloWorld" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "HelloWorld_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HelloWorld_email_key" ON "HelloWorld"("email");
