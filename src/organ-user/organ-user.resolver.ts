import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganUserService } from './organ-user.service';
import { OrganUser } from './entities/organ-user.entity';
import { CreateOrganUserInput } from './dto/create-organ-user.input';
import { UpdateOrganUserInput } from './dto/update-organ-user.input';

@Resolver(() => OrganUser)
export class OrganUserResolver {
  constructor(private readonly organUserService: OrganUserService) {}

  @Mutation(() => OrganUser)
  createOrganUser(@Args('createOrganUserInput') createOrganUserInput: CreateOrganUserInput) {
    return this.organUserService.create(createOrganUserInput);
  }

  @Query(() => [OrganUser], { name: 'organUser' })
  findAll() {
    return this.organUserService.findAll();
  }

  @Query(() => OrganUser, { name: 'organUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.organUserService.findOne(id);
  }

  @Mutation(() => OrganUser)
  updateOrganUser(@Args('updateOrganUserInput') updateOrganUserInput: UpdateOrganUserInput) {
    return this.organUserService.update(updateOrganUserInput.id, updateOrganUserInput);
  }

  @Mutation(() => OrganUser)
  removeOrganUser(@Args('id', { type: () => Int }) id: number) {
    return this.organUserService.remove(id);
  }
}
