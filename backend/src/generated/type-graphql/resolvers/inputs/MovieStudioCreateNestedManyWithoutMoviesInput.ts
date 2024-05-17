import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioCreateOrConnectWithoutMoviesInput } from "../inputs/MovieStudioCreateOrConnectWithoutMoviesInput";
import { MovieStudioCreateWithoutMoviesInput } from "../inputs/MovieStudioCreateWithoutMoviesInput";
import { MovieStudioWhereUniqueInput } from "../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.InputType("MovieStudioCreateNestedManyWithoutMoviesInput", {})
export class MovieStudioCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => [MovieStudioCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: MovieStudioCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieStudioCreateOrConnectWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?: MovieStudioCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieStudioWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieStudioWhereUniqueInput[] | undefined;
}
