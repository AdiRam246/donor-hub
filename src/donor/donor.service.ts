import { Injectable } from '@nestjs/common';
import { CreateDonorInput } from './dto/create-donor.input';
import { UpdateDonorInput } from './dto/update-donor.input';

@Injectable()
export class DonorService {
  create(createDonorInput: CreateDonorInput) {
    return 'This action adds a new donor';
  }

  findAll() {
    return `This action returns all donor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donor`;
  }

  update(id: number, updateDonorInput: UpdateDonorInput) {
    return `This action updates a #${id} donor`;
  }

  remove(id: number) {
    return `This action removes a #${id} donor`;
  }
}
