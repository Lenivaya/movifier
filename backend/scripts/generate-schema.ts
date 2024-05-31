import "reflect-metadata";

import path from "path";
import { applyResolversEnhanceMap } from "@/generated/type-graphql";
import { resolvers, resolversEnhanceMap } from "@/graphql/resolvers";
import { buildSchema } from "type-graphql";

applyResolversEnhanceMap(resolversEnhanceMap);
buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "../generated-schema.graphql"),
    validate: false,
});
