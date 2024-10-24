import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Address {
    @Prop()
    @Field(() => String, { description: 'line1' })
    line1: String;
    @Prop()
    @Field(() => String, { description: 'line2' })
    line2: String;
    @Prop()
    @Field(() => String, { description: 'city' })
    city: String;
    @Prop()
    @Field(() => String, { description: 'state' })
    state: String;
    @Prop()
    @Field(() => Int, { description: 'zip' })
    zip: number;
    @Prop()
    @Field(() => String, { description: 'country' })
    country: String;
}
