import * as TypeGraphQL from "type-graphql";
import { UserRegisterOutput } from "@/graphql/users/outputs/userRegisterOutput";

@TypeGraphQL.ObjectType()
export class UserLoginOutput extends UserRegisterOutput {}
