/*
  Warnings:

  - Added the required column `description` to the `checkout_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `checkout_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `checkout_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart_items` DROP FOREIGN KEY `cart_items_checkOutId_fkey`;

-- AlterTable
ALTER TABLE `checkout_items` ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;
