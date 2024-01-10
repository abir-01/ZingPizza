/*
  Warnings:

  - You are about to drop the column `item_name` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "item_name",
ADD COLUMN     "item_names" TEXT[],
ADD COLUMN     "quantity" INTEGER[];
