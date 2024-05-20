/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MovieKeywordCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MovieKeywordCategory_name_key" ON "MovieKeywordCategory"("name");
