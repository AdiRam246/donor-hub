import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrganUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
