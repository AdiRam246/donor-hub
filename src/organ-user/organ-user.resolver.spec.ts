import { Test, TestingModule } from '@nestjs/testing';
import { OrganUserResolver } from './organ-user.resolver';
import { OrganUserService } from './organ-user.service';

describe('OrganUserResolver', () => {
  let resolver: OrganUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganUserResolver, OrganUserService],
    }).compile();

    resolver = module.get<OrganUserResolver>(OrganUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
