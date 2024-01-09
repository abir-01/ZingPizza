-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_crust_id_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_size_id_fkey";

-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "size_id" DROP NOT NULL,
ALTER COLUMN "crust_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_crust_id_fkey" FOREIGN KEY ("crust_id") REFERENCES "Crust"("id") ON DELETE SET NULL ON UPDATE CASCADE;
