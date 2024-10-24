import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DonorService } from './donor.service';
import { Donor } from './entities/donor.entity';
import { CreateDonorInput } from './dto/create-donor.input';
import { UpdateDonorInput } from './dto/update-donor.input';

@Resolver(() => Donor)
export class DonorResolver {
  constructor(private readonly donorService: DonorService) {}

  @Mutation(() => Donor)
  createDonor(@Args('createDonorInput') createDonorInput: CreateDonorInput) {
    return this.donorService.create(createDonorInput);
  }

  @Query(() => [Donor], { name: 'donor' })
  findAll() {
    return this.donorService.findAll();
  }

  @Query(() => Donor, { name: 'donor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.donorService.findOne(id);
  }

  @Mutation(() => Donor)
  updateDonor(@Args('updateDonorInput') updateDonorInput: UpdateDonorInput) {
    return this.donorService.update(updateDonorInput.id, updateDonorInput);
  }

  @Mutation(() => Donor)
  removeDonor(@Args('id', { type: () => Int }) id: number) {
    return this.donorService.remove(id);
  }
}
