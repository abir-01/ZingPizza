/*
  Warnings:

  - Added the required column `food_type` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "food_type" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
