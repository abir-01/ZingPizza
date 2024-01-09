/*
  Warnings:

  - You are about to drop the column `crust_id` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `size_id` on the `Menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_crust_id_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_size_id_fkey";

-- DropIndex
DROP INDEX "Menu_crust_id_key";

-- DropIndex
DROP INDEX "Menu_size_id_key";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "crust_id",
DROP COLUMN "size_id";
