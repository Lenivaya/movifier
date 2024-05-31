import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateWithoutCrewMembersInput } from "../inputs/MovieUpdateWithoutCrewMembersInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieUpdateToOneWithWhereWithoutCrewMembersInput", {})
export class MovieUpdateToOneWithWhereWithoutCrewMembersInput {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutCrewMembersInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutCrewMembersInput;
}
