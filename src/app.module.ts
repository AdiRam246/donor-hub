import { Module, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';

import { DatabaseModule } from './config/db/database.module';
import { EnvConfigModule } from './config/env/envconfig.module';
import { GraphqlModule } from './config/graphql/graphql.module';
import { OrganizationModule } from './organization/organization.module';
import { DonorModule } from './donor/donor.module';
import { OrganUserModule } from './organ-user/organ-user.module';
@Module({
  imports: [ EnvConfigModule, RoleModule, DatabaseModule, GraphqlModule, OrganizationModule, DonorModule, OrganUserModule],
  providers: [AppService],
})
export class AppModule{}
