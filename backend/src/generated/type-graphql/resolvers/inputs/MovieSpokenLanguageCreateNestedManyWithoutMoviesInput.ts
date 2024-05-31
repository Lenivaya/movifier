import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieSpokenLanguageCreateOrConnectWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateOrConnectWithoutMoviesInput";
import { MovieSpokenLanguageCreateWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateWithoutMoviesInput";
import { MovieSpokenLanguageWhereUniqueInput } from "../inputs/MovieSpokenLanguageWhereUniqueInput";

@TypeGraphQL.InputType("MovieSpokenLanguageCreateNestedManyWithoutMoviesInput", {})
export class MovieSpokenLanguageCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [MovieSpokenLanguageCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: MovieSpokenLanguageCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieSpokenLanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieSpokenLanguageWhereUniqueInput[] | undefined;
}
