import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseApp } from 'src/common/entities/base.app.entity';

@Schema({timestamps:true})
@ObjectType()
export class Role extends BaseApp {
@Prop({
  required:true,
  unique:true
})
@Field(() => String, { description: ' Role Resource Id' })
roleResourceId: String;
@Prop()
@Field(() => String, { description: 'Role Name' })
roleName: String;
@Prop({immutable:true})
@Field(() => String, { description: 'Role Short Code'})
roleShortCode: String;
}
export const roleSchema = SchemaFactory.createForClass(Role);
