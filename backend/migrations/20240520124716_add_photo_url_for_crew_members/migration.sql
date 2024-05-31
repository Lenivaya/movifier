/*
  Warnings:

  - Added the required column `photoUrl` to the `MovieCrewMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieCrewMember" ADD COLUMN     "photoUrl" TEXT NOT NULL;
