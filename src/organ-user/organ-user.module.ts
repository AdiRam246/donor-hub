import { Module } from '@nestjs/common';
import { OrganUserService } from './organ-user.service';
import { OrganUserResolver } from './organ-user.resolver';

@Module({
  providers: [OrganUserResolver, OrganUserService],
})
export class OrganUserModule {}
