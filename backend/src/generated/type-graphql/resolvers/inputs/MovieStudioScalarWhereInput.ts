import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieStudioScalarWhereInput", {})
export class MovieStudioScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereInput], {
    nullable: true
  })
  AND?: MovieStudioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereInput], {
    nullable: true
  })
  OR?: MovieStudioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieStudioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
