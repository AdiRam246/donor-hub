import { CreateOrganUserInput } from './create-organ-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrganUserInput extends PartialType(CreateOrganUserInput) {
  @Field(() => Int)
  id: number;
}
