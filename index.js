import { GraphQLServer } from "graphql-yoga";
// console.log("asdfsafdsad");
import resolvers from "./graphql/resolvers" //라이브러리가 아닌, 폴더에서 import

const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql",
    //모든 타입에 대한 정의
    resolvers
});

server.start(()=> console.log("graphql server running"))