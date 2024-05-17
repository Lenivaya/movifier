import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutInWatchlistByUsersInput } from "../inputs/MovieCreateNestedManyWithoutInWatchlistByUsersInput";
import { MovieListCommentCreateNestedManyWithoutUserInput } from "../inputs/MovieListCommentCreateNestedManyWithoutUserInput";
import { MovieListCreateNestedManyWithoutMovieListAuthorInput } from "../inputs/MovieListCreateNestedManyWithoutMovieListAuthorInput";
import { MoviefireAppUserRole } from "../../enums/MoviefireAppUserRole";

@TypeGraphQL.InputType("MovifierAppUserCreateWithoutRatingInput", {})
export class MovifierAppUserCreateWithoutRatingInput {
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
  password!: string;

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

  @TypeGraphQL.Field(
    (_type) => MovieListCreateNestedManyWithoutMovieListAuthorInput,
    {
      nullable: true,
    },
  )
  movieLists?: MovieListCreateNestedManyWithoutMovieListAuthorInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieListCommentCreateNestedManyWithoutUserInput,
    {
      nullable: true,
    },
  )
  movieListsComments?:
    | MovieListCommentCreateNestedManyWithoutUserInput
    | undefined;
}
