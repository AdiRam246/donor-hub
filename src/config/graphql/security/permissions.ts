// import { HttpException } from '@nestjs/common';
// import { ApolloError } from 'apollo-server-errors';
// import { shield, and, or } from 'graphql-shield';
// import * as rules from './rules';
// import * as methodRules from './rules.util';

// export const permissions = shield(
//   {
//     Query: {
//       users: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, and(rules.isSiteAdmin, rules.orgvaladition)),
//       ),
//       user: and(rules.isAuthenticated),
//       userprofileimgupload: and(rules.isAuthenticated),
//       usersCount: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, and(rules.isSiteAdmin, rules.orgvaladition)),
//       ),

//       organizations: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       orgCount: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       organization: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       orglogoupload: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),

//       studies: and(
//         rules.isAuthenticated,
//         or(
//           rules.isSystemAdmin,
//           and(methodRules.isExactSiteAdmin, methodRules.isExactSiteUser),
//         ),
//       ),
//       studyCount: and(rules.isAuthenticated),

//       vendors: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       vendorCount: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       vendor: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       vendorlogoupload: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),

//       vendorTypes: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       vendorsType: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//     },
//     Mutation: {
//       createUser: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, and(rules.isSiteAdmin, rules.createUser)),
//       ),
//       updateUser: and(rules.isAuthenticated),
//       removeUser: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       inviteUser: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, and(rules.isSiteAdmin, rules.orgvaladition)),
//       ),

//       createOrganization: and(rules.isAuthenticated, rules.isSystemAdmin),
//       updateOrganization: and(rules.isAuthenticated, rules.isSystemAdmin),
//       removeOrganization: and(rules.isAuthenticated, rules.isSystemAdmin),

//       createRole: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       UpdateRoleInput: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       removeRole: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),

//       createStudy: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, and(methodRules.isExactSiteAdminStudyCreate)),
//       ),
//       updateStudy: and(
//         rules.isAuthenticated,
//         or(
//           rules.isSystemAdmin,
//           rules.isSiteAdmin,
//           methodRules.isExactSiteAdminUpdate,
//         ),
//       ),
//       removeStudy: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),

//       createVendor: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       updateVendor: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),
//       deleteVendor: and(
//         rules.isAuthenticated,
//         or(rules.isSystemAdmin, rules.isSiteAdmin),
//       ),

//       createVendorType: and(rules.isAuthenticated, or(rules.isSystemAdmin)),
//       updateVendorType: and(rules.isAuthenticated, or(rules.isSystemAdmin)),
//       deleteVendorType: and(rules.isAuthenticated, or(rules.isSystemAdmin)),
//     },
//   },
//   {
//     allowExternalErrors: true,
//     fallbackError: (
//       thrownThing: HttpException,
//       parent,
//       args,
//       context,
//       info,
//     ) => {
//       return new ApolloError('ForbiddenException', 'ForbiddenException');
//     },
//   },
// );
