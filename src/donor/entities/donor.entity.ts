import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Donor {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
