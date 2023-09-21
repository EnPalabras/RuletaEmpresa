-- CreateTable
CREATE TABLE "Tirada" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "tipo" TEXT NOT NULL,
    "carta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tirada_pkey" PRIMARY KEY ("id")
);
