import { ObjectType, Field } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class BaseApp {
  @Prop({immutable: true})
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date
  @Prop()
  @Field(() => Date, { description: 'modified At', nullable: true })
  modifiedAt?: Date
  @Prop({ default: true })
  @Field(() => Boolean, { description: 'isActive', nullable: true })
  isActive: Boolean;
  @Prop({ default: false })
  @Field(() => Boolean, { description: 'isDeleted', nullable: true })
  isDeleted: Boolean;
  @Prop({immutable: true})
  @Field(() => String, { description: 'createdBy', nullable: false})
  createdBy: String;
  @Field(() => String, { description: 'modifiedBy', nullable: true})
  modifiedBy: String;
 }
