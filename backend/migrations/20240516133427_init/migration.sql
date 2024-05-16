-- CreateTable
CREATE TABLE "MovieStudio" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MovieStudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "genreName" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieStats" (
    "id" TEXT NOT NULL,
    "timesWatchedCount" INTEGER NOT NULL,
    "totalRatingsCount" INTEGER NOT NULL,
    "totalLikesCount" INTEGER NOT NULL,
    "overallPlaceINTop" INTEGER NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieInfo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imdbId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alternativeTitles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "durationInMinutes" INTEGER NOT NULL,
    "posterUrl" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieSpokenLanguage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "MovieSpokenLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCrewMember" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "movieCrewMemberTypeId" TEXT,

    CONSTRAINT "MovieCrewMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "MovieCrewMemberType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MovieCrewMemberType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieKeywordCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MovieKeywordCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovifierAppUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MovifierAppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MovieList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieListStats" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "views" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "movieListId" TEXT NOT NULL,

    CONSTRAINT "MovieListStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieListComment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "movieListId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MovieListComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieRating" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "movieId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MovieRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieReview" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "ratingId" TEXT NOT NULL,

    CONSTRAINT "MovieReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToMovieCrewMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovieStudio" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovieKeywordCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovieList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovifierAppUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovieSpokenLanguage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToMovie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieStats_movieId_key" ON "MovieStats"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "MovieInfo_imdbId_key" ON "MovieInfo"("imdbId");

-- CreateIndex
CREATE UNIQUE INDEX "MovieInfo_movieId_key" ON "MovieInfo"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MovifierAppUser_email_key" ON "MovifierAppUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MovifierAppUser_username_key" ON "MovifierAppUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MovieListStats_movieListId_key" ON "MovieListStats"("movieListId");

-- CreateIndex
CREATE UNIQUE INDEX "MovieRating_movieId_key" ON "MovieRating"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "MovieReview_ratingId_key" ON "MovieReview"("ratingId");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCrewMember_AB_unique" ON "_MovieToMovieCrewMember"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCrewMember_B_index" ON "_MovieToMovieCrewMember"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieStudio_AB_unique" ON "_MovieToMovieStudio"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieStudio_B_index" ON "_MovieToMovieStudio"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieKeywordCategory_AB_unique" ON "_MovieToMovieKeywordCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieKeywordCategory_B_index" ON "_MovieToMovieKeywordCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieList_AB_unique" ON "_MovieToMovieList"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieList_B_index" ON "_MovieToMovieList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovifierAppUser_AB_unique" ON "_MovieToMovifierAppUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovifierAppUser_B_index" ON "_MovieToMovifierAppUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieSpokenLanguage_AB_unique" ON "_MovieToMovieSpokenLanguage"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieSpokenLanguage_B_index" ON "_MovieToMovieSpokenLanguage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToMovie_AB_unique" ON "_GenreToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToMovie_B_index" ON "_GenreToMovie"("B");

-- AddForeignKey
ALTER TABLE "MovieStats" ADD CONSTRAINT "MovieStats_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieInfo" ADD CONSTRAINT "MovieInfo_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCrewMember" ADD CONSTRAINT "MovieCrewMember_movieCrewMemberTypeId_fkey" FOREIGN KEY ("movieCrewMemberTypeId") REFERENCES "MovieCrewMemberType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieList" ADD CONSTRAINT "MovieList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListStats" ADD CONSTRAINT "MovieListStats_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListComment" ADD CONSTRAINT "MovieListComment_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListComment" ADD CONSTRAINT "MovieListComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieRating" ADD CONSTRAINT "MovieRating_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieRating" ADD CONSTRAINT "MovieRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "MovieRating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCrewMember" ADD CONSTRAINT "_MovieToMovieCrewMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCrewMember" ADD CONSTRAINT "_MovieToMovieCrewMember_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCrewMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieStudio" ADD CONSTRAINT "_MovieToMovieStudio_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieStudio" ADD CONSTRAINT "_MovieToMovieStudio_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieStudio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieKeywordCategory" ADD CONSTRAINT "_MovieToMovieKeywordCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieKeywordCategory" ADD CONSTRAINT "_MovieToMovieKeywordCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieKeywordCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieList" ADD CONSTRAINT "_MovieToMovieList_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieList" ADD CONSTRAINT "_MovieToMovieList_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovifierAppUser" ADD CONSTRAINT "_MovieToMovifierAppUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovifierAppUser" ADD CONSTRAINT "_MovieToMovifierAppUser_B_fkey" FOREIGN KEY ("B") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" ADD CONSTRAINT "_MovieToMovieSpokenLanguage_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" ADD CONSTRAINT "_MovieToMovieSpokenLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieSpokenLanguage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
