import { Injectable } from '@nestjs/common';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './entities/organization.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class OrganizationService {
    constructor(
    @InjectModel(Organization.name) private readonly OrganizationModel: Model<Organization>,
  ) {}
  async create(createOrganizationInput: CreateOrganizationInput) {
    console.log(createOrganizationInput)
    createOrganizationInput.orgId = randomUUID()
        const organization = new this.OrganizationModel(createOrganizationInput);
    let user = await organization.save()
    console.log(user);
    return 'This action adds a new organization';
  }

  findAll() {
    return `This action returns all organization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: String, updateOrganizationInput: UpdateOrganizationInput) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
