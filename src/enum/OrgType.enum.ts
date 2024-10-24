import { registerEnumType } from "@nestjs/graphql";

export enum OrgType {
  HOSPITAL = 'HOSPITAL',
  BLOOD_BANK = 'BLOOD_BANK',
}

registerEnumType(OrgType, {
  name: 'OrgType', 
  description: 'The type of organization', 
});