import { Inject, Injectable } from '@nestjs/common';
import { RoleService } from './role/role.service';

@Injectable()
export class AppService {

  constructor( private readonly roleService: RoleService){
    
  }
  async createDefaultRoles(): Promise<void>{
   await this.roleService.createDefaultRoles();
  }
}
