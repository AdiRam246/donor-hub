import { Test, TestingModule } from '@nestjs/testing';
import { DonorResolver } from './donor.resolver';
import { DonorService } from './donor.service';

describe('DonorResolver', () => {
  let resolver: DonorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonorResolver, DonorService],
    }).compile();

    resolver = module.get<DonorResolver>(DonorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
