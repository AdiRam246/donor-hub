import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDonorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
