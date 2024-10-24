import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrganUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
