import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { MovieStudioCount } from "../resolvers/outputs/MovieStudioCount";

@TypeGraphQL.ObjectType("MovieStudio", {})
export class MovieStudio {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  movies?: Movie[];

  @TypeGraphQL.Field((_type) => MovieStudioCount, {
    nullable: true,
  })
  _count?: MovieStudioCount | null;
}
