import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseApp } from '../../common/entities/base.app.entity';
import { OrgType } from '../../enum/OrgType.enum';
import { Address } from '../../common/entities/address.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Organization extends BaseApp {
  @Prop({
    required: true,
    unique: true,
  })
  @Field(() => String, { description: 'Org Id' })
  orgId: string;

  @Prop()
  @Field(() => String, { description: 'Org Name' })
  orgName: string;

  @Prop()
  @Field(() => OrgType, { description: 'Org Type', nullable: false })
  orgType: OrgType;

  @Prop()
  @Field(() => String, { description: 'Email' })
  email: string;

  @Prop()
  @Field(() => String, { description: 'Phone Number' })
  phoneNumber: string; 

  @Prop({ type: () => Address }) 
  @Field(() => Address, { description: 'Address details' })
  address: Address; 
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
