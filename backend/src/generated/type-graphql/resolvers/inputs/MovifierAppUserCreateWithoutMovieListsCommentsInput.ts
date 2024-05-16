import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateNestedManyWithoutInWatchlistByUsersInput";
import { MovieListCreateNestedManyWithoutMovieListAuthorInput } from "../inputs/MovieListCreateNestedManyWithoutMovieListAuthorInput";
import { MovieRatingCreateNestedManyWithoutUserInput } from "../inputs/MovieRatingCreateNestedManyWithoutUserInput";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType(
  "MovifierAppUserCreateWithoutMovieListsCommentsInput",
  {},
)
export class MovifierAppUserCreateWithoutMovieListsCommentsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password_hash!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => MoviefireAppUserRole, {
    nullable: true,
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCreateNestedManyWithoutInWatchlistByUsersInput,
    {
      nullable: true,
    },
  )
  watchlist?: MovieCreateNestedManyWithoutInWatchlistByUsersInput | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  rating?: MovieRatingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListCreateNestedManyWithoutMovieListAuthorInput,
    {
      nullable: true,
    },
  )
  movieLists?: MovieListCreateNestedManyWithoutMovieListAuthorInput | undefined;
}
