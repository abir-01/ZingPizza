/*
  Warnings:

  - A unique constraint covering the columns `[addr_id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `pincode` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `addr_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "pincode",
ADD COLUMN     "pincode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "addr_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_addr_id_key" ON "Order"("addr_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addr_id_fkey" FOREIGN KEY ("addr_id") REFERENCES "Address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;
