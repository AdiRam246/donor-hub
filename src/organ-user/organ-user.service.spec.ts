import { Test, TestingModule } from '@nestjs/testing';
import { OrganUserService } from './organ-user.service';

describe('OrganUserService', () => {
  let service: OrganUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganUserService],
    }).compile();

    service = module.get<OrganUserService>(OrganUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
