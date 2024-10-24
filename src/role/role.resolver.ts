import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';


@Resolver(() => Role)
export class RoleResolver {
  constructor(private RoleService: RoleService) {}

  @Mutation(() => Role)
  createRole(@Args('CreateRoleInput') CreateRoleInput: CreateRoleInput) {
    
    return this.RoleService.create(CreateRoleInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAll(@Args('roleName', { type: () => String }) roleName: string) {
    return this.RoleService.find(roleName);
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('roleResourceId', { type: () => String }) roleResourceId: String) {
    return this.RoleService.findOne(roleResourceId);
  }

  @Mutation(() => Role)
  UpdateRoleInput(@Args('UpdateRoleInput') UpdateRoleInput: UpdateRoleInput) {
    return this.RoleService.update(UpdateRoleInput.roleResourceId, UpdateRoleInput);
  }
 
  @Mutation(() => Boolean)
  removeRole(@Args('roleResourceId') roleResourceId: String) {
    this.RoleService.remove(roleResourceId);
    return true;
  }
}
