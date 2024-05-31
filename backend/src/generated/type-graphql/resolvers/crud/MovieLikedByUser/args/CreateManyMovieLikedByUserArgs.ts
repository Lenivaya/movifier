import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserCreateManyInput } from "../../../inputs/MovieLikedByUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieLikedByUserArgs {
  @TypeGraphQL.Field(_type => [MovieLikedByUserCreateManyInput], {
    nullable: false
  })
  data!: MovieLikedByUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
