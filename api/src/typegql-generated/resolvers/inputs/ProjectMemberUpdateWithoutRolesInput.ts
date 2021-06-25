import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ProjectMemberPermissionsUpdateOneWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsUpdateOneWithoutProjectMemberInput";
import { ProjectUpdateOneRequiredWithoutMembersInput } from "../inputs/ProjectUpdateOneRequiredWithoutMembersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAllProjectsInput } from "../inputs/UserUpdateOneRequiredWithoutAllProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateWithoutRolesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  awaitingApproval?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateOneWithoutProjectMemberInput, {
    nullable: true
  })
  overallPermissions?: ProjectMemberPermissionsUpdateOneWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutMembersInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAllProjectsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAllProjectsInput | undefined;
}
