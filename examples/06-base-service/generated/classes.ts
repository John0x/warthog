// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
import { GraphQLDateTime as DateTime } from "graphql-iso-date";
import { GraphQLID as ID } from "graphql";
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
import { registerEnumType } from "type-graphql";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs } from "../../../src";
// @ts-ignore
import { User } from "../src/user.model";

export enum UserOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC",

  lastName_ASC = "lastName_ASC",
  lastName_DESC = "lastName_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput {
  @TypeGraphQLField(() => String, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_eq?: String;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: String;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: String;

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: String;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: String;

  @TypeGraphQLField(() => String, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  updatedAt_eq?: String;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: String;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: String;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: String;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: String;

  @TypeGraphQLField(() => String, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField({ nullable: true })
  deletedAt_eq?: String;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: String;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: String;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: String;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: String;

  @TypeGraphQLField(() => String, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  firstName_in?: string[];

  @TypeGraphQLField({ nullable: true })
  lastName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  lastName_in?: string[];
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField()
  firstName!: string;

  @TypeGraphQLField()
  lastName!: string;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  firstName?: string;

  @TypeGraphQLField({ nullable: true })
  lastName?: string;
}

@ArgsType()
export class UserWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @TypeGraphQLField(() => UserOrderByEnum, { nullable: true })
  orderBy?: UserOrderByEnum;
}

@ArgsType()
export class UserCreateManyArgs {
  @TypeGraphQLField(() => [UserCreateInput])
  data!: UserCreateInput[];
}

@ArgsType()
export class UserUpdateArgs {
  @TypeGraphQLField() data!: UserUpdateInput;
  @TypeGraphQLField() where!: UserWhereUniqueInput;
}
