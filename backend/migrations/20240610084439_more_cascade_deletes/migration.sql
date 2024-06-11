-- DropForeignKey
ALTER TABLE "MovieLikedByUser" DROP CONSTRAINT "MovieLikedByUser_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieLikedByUser" DROP CONSTRAINT "MovieLikedByUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieList" DROP CONSTRAINT "MovieList_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieListComment" DROP CONSTRAINT "MovieListComment_movieListId_fkey";

-- DropForeignKey
ALTER TABLE "MovieListComment" DROP CONSTRAINT "MovieListComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieListLikedByUser" DROP CONSTRAINT "MovieListLikedByUser_movieListId_fkey";

-- DropForeignKey
ALTER TABLE "MovieListLikedByUser" DROP CONSTRAINT "MovieListLikedByUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieListStats" DROP CONSTRAINT "MovieListStats_movieListId_fkey";

-- DropForeignKey
ALTER TABLE "MovieWatchedByUser" DROP CONSTRAINT "MovieWatchedByUser_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieWatchedByUser" DROP CONSTRAINT "MovieWatchedByUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserMovieWatchlist" DROP CONSTRAINT "UserMovieWatchlist_movieId_fkey";

-- DropForeignKey
ALTER TABLE "UserMovieWatchlist" DROP CONSTRAINT "UserMovieWatchlist_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserMovieWatchlist" ADD CONSTRAINT "UserMovieWatchlist_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMovieWatchlist" ADD CONSTRAINT "UserMovieWatchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieList" ADD CONSTRAINT "MovieList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListStats" ADD CONSTRAINT "MovieListStats_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListComment" ADD CONSTRAINT "MovieListComment_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListComment" ADD CONSTRAINT "MovieListComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListLikedByUser" ADD CONSTRAINT "MovieListLikedByUser_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListLikedByUser" ADD CONSTRAINT "MovieListLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieWatchedByUser" ADD CONSTRAINT "MovieWatchedByUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieWatchedByUser" ADD CONSTRAINT "MovieWatchedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieLikedByUser" ADD CONSTRAINT "MovieLikedByUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieLikedByUser" ADD CONSTRAINT "MovieLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
