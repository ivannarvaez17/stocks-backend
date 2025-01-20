/*
  Warnings:

  - Added the required column `img_url` to the `stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stocks" ADD COLUMN     "img_url" VARCHAR(400) NOT NULL;
