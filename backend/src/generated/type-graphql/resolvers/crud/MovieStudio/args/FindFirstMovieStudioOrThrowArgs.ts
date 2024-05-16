import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioOrderByWithRelationInput } from "../../../inputs/MovieStudioOrderByWithRelationInput";
import { MovieStudioWhereInput } from "../../../inputs/MovieStudioWhereInput";
import { MovieStudioWhereUniqueInput } from "../../../inputs/MovieStudioWhereUniqueInput";
import { MovieStudioScalarFieldEnum } from "../../../../enums/MovieStudioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMovieStudioOrThrowArgs {
  @TypeGraphQL.Field((_type) => MovieStudioWhereInput, {
    nullable: true,
  })
  where?: MovieStudioWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieStudioOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieStudioOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieStudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieStudioScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name"> | undefined;
}
