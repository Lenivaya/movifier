import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCrewMemberCreateOrConnectWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateOrConnectWithoutMoviesInput";
import { MovieCrewMemberCreateWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateWithoutMoviesInput";
import { MovieCrewMemberWhereUniqueInput } from "../inputs/MovieCrewMemberWhereUniqueInput";

@TypeGraphQL.InputType("MovieCrewMemberCreateNestedOneWithoutMoviesInput", {})
export class MovieCrewMemberCreateNestedOneWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieCrewMemberCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: MovieCrewMemberCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberCreateOrConnectWithoutMoviesInput, {
    nullable: true
  })
  connectOrCreate?: MovieCrewMemberCreateOrConnectWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieCrewMemberWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieCrewMemberWhereUniqueInput | undefined;
}
