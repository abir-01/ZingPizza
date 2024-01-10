/*
  Warnings:

  - You are about to drop the column `addr_id` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_addr_id_fkey";

-- DropIndex
DROP INDEX "Order_addr_id_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "order_id" TEXT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "addr_id";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
