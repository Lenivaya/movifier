-- This is migration file for adding full text search to the database

CREATE EXTENSION IF NOT EXISTS pgroonga;

create index if not exists movie_info_pgroonga_idx on "MovieInfo" using pgroonga (title, description, "imdbId");
create index if not exists genre_pgroonga_idx on "Genre" using pgroonga (name);
create index if not exists movie_keyword_category_pgroonga_idx on "MovieKeywordCategory" using pgroonga (name);
create index if not exists movie_list_pgroonga_idx on "MovieList" using pgroonga (name);


