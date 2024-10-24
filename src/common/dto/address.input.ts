import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class CreateAddressInput {
    @Field(() => String, { description: 'line1' })
    line1: String;
    @Field(() => String, { description: 'line2' })
    line2: String;
    @Field(() => String, { description: 'city' })
    city: String;
    @Field(() => String, { description: 'state' })
    state: String;
    @Field(() => Int, { description: 'zip' })
    zip: number;
    @Field(() => String, { description: 'country' })
    country: String;
}
