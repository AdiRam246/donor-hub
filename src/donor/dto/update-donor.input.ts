import { CreateDonorInput } from './create-donor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDonorInput extends PartialType(CreateDonorInput) {
  @Field(() => Int)
  id: number;
}
