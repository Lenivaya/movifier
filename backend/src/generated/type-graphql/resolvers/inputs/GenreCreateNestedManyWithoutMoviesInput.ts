import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutMoviesInput } from "../inputs/GenreCreateOrConnectWithoutMoviesInput";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateNestedManyWithoutMoviesInput", {})
export class GenreCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: GenreCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;
}
