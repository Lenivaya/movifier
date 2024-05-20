/*
  Warnings:

  - You are about to drop the column `movieCrewMemberTypeId` on the `MovieCrewMember` table. All the data in the column will be lost.
  - You are about to drop the `_MovieToMovieCrewMember` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieCrewMember" DROP CONSTRAINT "MovieCrewMember_movieCrewMemberTypeId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovieCrewMember" DROP CONSTRAINT "_MovieToMovieCrewMember_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovieCrewMember" DROP CONSTRAINT "_MovieToMovieCrewMember_B_fkey";

-- AlterTable
ALTER TABLE "MovieCrewMember" DROP COLUMN "movieCrewMemberTypeId";

-- DropTable
DROP TABLE "_MovieToMovieCrewMember";

-- CreateTable
CREATE TABLE "MovieCrewMemberOnMovie" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movieId" TEXT NOT NULL,
    "movieCrewMemberId" TEXT NOT NULL,
    "movieCrewMemberTypeId" TEXT NOT NULL,

    CONSTRAINT "MovieCrewMemberOnMovie_pkey" PRIMARY KEY ("movieId","movieCrewMemberId","movieCrewMemberTypeId")
);

-- AddForeignKey
ALTER TABLE "MovieCrewMemberOnMovie" ADD CONSTRAINT "MovieCrewMemberOnMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCrewMemberOnMovie" ADD CONSTRAINT "MovieCrewMemberOnMovie_movieCrewMemberId_fkey" FOREIGN KEY ("movieCrewMemberId") REFERENCES "MovieCrewMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCrewMemberOnMovie" ADD CONSTRAINT "MovieCrewMemberOnMovie_movieCrewMemberTypeId_fkey" FOREIGN KEY ("movieCrewMemberTypeId") REFERENCES "MovieCrewMemberType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
