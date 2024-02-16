-- DropIndex
DROP INDEX `checkout_items_cartId_fkey` ON `checkout_items`;

-- AlterTable
ALTER TABLE `cart_items` ADD COLUMN `checkOutId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_checkOutId_fkey` FOREIGN KEY (`checkOutId`) REFERENCES `checkout_items`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
