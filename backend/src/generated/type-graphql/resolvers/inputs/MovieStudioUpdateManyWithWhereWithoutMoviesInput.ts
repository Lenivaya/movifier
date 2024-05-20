import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieStudioScalarWhereInput } from "../inputs/MovieStudioScalarWhereInput";
import { MovieStudioUpdateManyMutationInput } from "../inputs/MovieStudioUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieStudioUpdateManyWithWhereWithoutMoviesInput", {})
export class MovieStudioUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field(_type => MovieStudioScalarWhereInput, {
    nullable: false
  })
  where!: MovieStudioScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieStudioUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieStudioUpdateManyMutationInput;
}
