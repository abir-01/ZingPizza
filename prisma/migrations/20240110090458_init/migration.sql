/*
  Warnings:

  - You are about to drop the column `order_id` on the `Address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_order_id_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "order_id";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "addr_id" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addr_id_fkey" FOREIGN KEY ("addr_id") REFERENCES "Address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;
