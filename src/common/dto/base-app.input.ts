import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateBaseAppInput {
  @Field(() => Date, { description: 'cteateTime', nullable: true })
  createAt: Date;
  @Field(() => Date, { description: 'modified time', nullable: true })
  modifiedAt: Date;
  @Field(() => Boolean, { description: 'isActive', nullable: true })
  isActive: Boolean;
  @Field(() => Boolean, { description: 'isDeleted', nullable: true })
  isDeleted: Boolean;
  @Field(() => String, { description: 'createdBy', nullable: false })
  createdBy: String;
  @Field(() => String, { description: 'modifiedBy', nullable: true })
  modifiedBy: String;
}
