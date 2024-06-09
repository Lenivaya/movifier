import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { GenreCount } from "../resolvers/outputs/GenreCount";

@TypeGraphQL.ObjectType("Genre", {})
export class Genre {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  movies?: Movie[];

  @TypeGraphQL.Field(_type => GenreCount, {
    nullable: true
  })
  _count?: GenreCount | null;
}
