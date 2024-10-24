import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateBaseAppInput } from '../../common/dto/base-app.input';

@InputType()
export class CreateRoleInput extends CreateBaseAppInput {
@Field({ description: ' Role Resource Id', nullable:true  })
roleResourceId: String;
@Field(() => String, { description: 'Role Name' })
roleName: String;
@Field(() => String, { description: 'Role Short Code' })
roleShortCode: String;
}
