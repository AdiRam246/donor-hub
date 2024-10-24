import { Injectable } from '@nestjs/common';
import { CreateOrganUserInput } from './dto/create-organ-user.input';
import { UpdateOrganUserInput } from './dto/update-organ-user.input';

@Injectable()
export class OrganUserService {
  create(createOrganUserInput: CreateOrganUserInput) {
    return 'This action adds a new organUser';
  }

  findAll() {
    return `This action returns all organUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organUser`;
  }

  update(id: number, updateOrganUserInput: UpdateOrganUserInput) {
    return `This action updates a #${id} organUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} organUser`;
  }
}
