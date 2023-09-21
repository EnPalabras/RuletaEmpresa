/*
  Warnings:

  - You are about to drop the column `carta` on the `Tirada` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Tirada` table. All the data in the column will be lost.
  - Added the required column `question` to the `Tirada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Tirada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tirada" DROP COLUMN "carta",
DROP COLUMN "tipo",
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
