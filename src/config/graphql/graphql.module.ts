import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HttpException, Module } from '@nestjs/common';
import { GraphQLModule, Mutation } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError, GraphQLSchema } from 'graphql';
//import { applyMiddleware } from 'graphql-middleware';
// import { IncorrectCredsException } from 'src/exceptions/incorrectCreds.exception';
// import { permissions } from './security/permissions';
// import { getErrorCode } from './security/securityutils';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: false,
        playground: true,
        autoSchemaFile: true,
        // transformSchema : (schema) =>{
        //   schema = applyMiddleware(schema, permissions) as GraphQLSchema;
        //   return schema;
        // },
        // formatError: (error) => {
        //   console.log("error",JSON.stringify(error))
        //   const formattedError:GraphQLFormattedError ={
        //     message: error.originalError.message,
        //     extensions:{
        //       "errorCode": getErrorCode(error.originalError.message)
        //     }
        //   }
        //   console.log("formattedError",JSON.stringify(formattedError))
        //   return formattedError;
        // }
      }),
  ],
  
})

export class GraphqlModule {

}


