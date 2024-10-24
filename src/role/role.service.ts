import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';
import { randomUUID } from 'crypto';
import { defaultroles } from 'src/enum/DefaultRoles.enum';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: Model<Role>,
  ) {}
  //create the role
  create(CreateRoleInput: CreateRoleInput) {
    const role = new this.roleModel(CreateRoleInput);
    return role.save();
  }
  
  //find all the  all the role detail
  async find(Name: string) {
    return await this.roleModel
      .find({ roleName: { $regex: Name, $options: 'i' } })
      .exec();
  }

  // find the specfic role
  async findOne(roleResourceId: String) {
    const role = await this.roleModel
      .findOne({ roleResourceId: roleResourceId })
      .exec();
    if (!role) {
      throw new NotFoundException(`role ${roleResourceId} not found`);
    }
    return role;
  }
  // update the role
  async update(roleResourceId: String, UpdateRoleInput: UpdateRoleInput) {
    const existingrole = await this.roleModel.findOneAndUpdate(
      { roleResourceId: roleResourceId },
      UpdateRoleInput,
      { new: true },
    );

    if (!existingrole) {
      throw new NotFoundException(`role ${roleResourceId} not found`);
    }
    return existingrole;
  }
  // remove the role detail
  async remove(roleResourceId: String) {
    await this.roleModel.findOneAndDelete({ roleResourceId: roleResourceId });
  }
  

  async createDefaultRoles() {
    const  exisitingRoles = await this.roleModel.find()
    console.log( exisitingRoles)
    let  existingRoleChortCodes =  exisitingRoles.map(({ roleShortCode }) => roleShortCode)
    let rolelist = []
    
    for (const property in defaultroles) {
      if (existingRoleChortCodes.includes(property)) {
        console.log('role extist',property)
    } 
      else {
        const role = new this.roleModel({
          roleResourceId: randomUUID(),
          roleShortCode: property , 
          roleName: property,
          createdBy:'SYSTEM'
        });
        rolelist.push(role);
      }
    }
  
  const roles = await this.roleModel.create(rolelist);
  console.log(roles) 
}
}
