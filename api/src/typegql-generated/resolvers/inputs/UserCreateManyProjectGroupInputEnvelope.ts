import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyProjectGroupInput } from "../inputs/UserCreateManyProjectGroupInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateManyProjectGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyProjectGroupInput], {
    nullable: false
  })
  data!: UserCreateManyProjectGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
