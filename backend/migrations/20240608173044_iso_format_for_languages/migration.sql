/*
  Warnings:

  - The primary key for the `MovieSpokenLanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `language` on the `MovieSpokenLanguage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[iso_639_1]` on the table `MovieSpokenLanguage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `MovieSpokenLanguage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iso_639_1` to the `MovieSpokenLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MovieSpokenLanguage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" DROP CONSTRAINT "_MovieToMovieSpokenLanguage_B_fkey";

-- DropIndex
DROP INDEX "MovieSpokenLanguage_language_key";

-- AlterTable
ALTER TABLE "MovieSpokenLanguage" DROP CONSTRAINT "MovieSpokenLanguage_pkey",
DROP COLUMN "language",
ADD COLUMN     "iso_639_1" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "MovieSpokenLanguage_pkey" PRIMARY KEY ("iso_639_1");

-- CreateIndex
CREATE UNIQUE INDEX "MovieSpokenLanguage_iso_639_1_key" ON "MovieSpokenLanguage"("iso_639_1");

-- CreateIndex
CREATE UNIQUE INDEX "MovieSpokenLanguage_name_key" ON "MovieSpokenLanguage"("name");

-- AddForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" ADD CONSTRAINT "_MovieToMovieSpokenLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieSpokenLanguage"("iso_639_1") ON DELETE CASCADE ON UPDATE CASCADE;
