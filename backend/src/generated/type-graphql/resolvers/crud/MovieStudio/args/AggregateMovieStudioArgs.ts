import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieStudioOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieStudioOrderByWithRelationAndSearchRelevanceInput";
import { MovieStudioWhereInput } from "../../../inputs/MovieStudioWhereInput";
import { MovieStudioWhereUniqueInput } from "../../../inputs/MovieStudioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovieStudioArgs {
  @TypeGraphQL.Field(_type => MovieStudioWhereInput, {
    nullable: true
  })
  where?: MovieStudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieStudioOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieStudioOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieStudioWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieStudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
