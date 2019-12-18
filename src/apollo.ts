import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolvers } from "./resolvers/UserResolvers";
export default async () => {
  return new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolvers]
    })
  });
};
