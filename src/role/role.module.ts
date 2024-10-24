import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, roleSchema } from './entities/role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Role.name,
        schema: roleSchema,
      },
    ]),
  ],
  providers: [RoleResolver, RoleService],
  exports: [RoleService]
})
export class RoleModule {}
