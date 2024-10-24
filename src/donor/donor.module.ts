import { Module } from '@nestjs/common';
import { DonorService } from './donor.service';
import { DonorResolver } from './donor.resolver';

@Module({
  providers: [DonorResolver, DonorService],
})
export class DonorModule {}
