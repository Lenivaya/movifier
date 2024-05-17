import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreOrderByWithRelationInput } from "../../../inputs/GenreOrderByWithRelationInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";
import { GenreScalarFieldEnum } from "../../../../enums/GenreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyGenreArgs {
  @TypeGraphQL.Field((_type) => GenreWhereInput, {
    nullable: true,
  })
  where?: GenreWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [GenreOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: GenreOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => GenreWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GenreWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [GenreScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"name" | "createdAt" | "updatedAt"> | undefined;
}
