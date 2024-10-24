import { InputType, Field } from '@nestjs/graphql';
import { CreateBaseAppInput } from '../../common/dto/base-app.input';
import { OrgType } from '../../enum/OrgType.enum';
import { CreateAddressInput } from '../../common/dto/address.input'; // Assuming you have this input defined

@InputType()
export class CreateOrganizationInput extends CreateBaseAppInput {

  @Field(() => CreateAddressInput, { description: 'Address Input' })
  address: CreateAddressInput;

  @Field(() => String, { description: 'Org Name' })
  orgName: String;

  @Field(() => String, { description: 'org Id', nullable: true })
  orgId: String;

  @Field(() => OrgType, { description: 'Org Type', nullable: false })
  orgType: OrgType;

  @Field(() => String, { description: 'email', nullable: true })
  email: String;

  @Field(() => String, { description: 'phone Number', nullable: true })
  phoneNumber: String;
}
