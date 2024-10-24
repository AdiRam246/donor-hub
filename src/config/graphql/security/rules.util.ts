// import { ForbiddenException } from "@nestjs/common";
// import { rule } from "graphql-shield";
// import { CognitoTokenClaims } from "src/common/entity/cognito.token.claims.";
// import { CryptoUtilityService } from "src/common/utility/crypto.utility";
// import { defaultroles } from "src/enums/DefaultRoles";






// const ID_TOKEN_HEADER = 'id-token';
// const REFRESH_TOKEN_HEADER = 'refresh-token';
// const REFRESHED_TOKEN_HEADER = 'refreshed-token';
// const ACCESS_CONTROL_HEADER = 'Access-Control-Expose-Headers';

// function getToken(authHeader: string) {
//     return authHeader.replace('Bearer ', '');
//   }

//   export const isExactSiteAdmin = rule()(async (parent, args, ctx, info) => {
//     let isExactValidSiteAdmin = false;
//     try {
//       const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//       const parsedIdToken: CognitoTokenClaims = 
//         new CryptoUtilityService().parseToken(idToken);
//       if (parsedIdToken) {
//         isExactValidSiteAdmin = parsedIdToken.orgs
//           .split('|')
//           .includes(ctx.req.body.variables.orgResourceId);
//       }
//     } catch (e) {
//       console.log('Error in checking is site admin', e);
//       throw new ForbiddenException();
//     }
//     console.log('Is site admin', isExactValidSiteAdmin);
//     return isExactValidSiteAdmin;
//   });

//   export const isExactSiteAdminStudyCreate = rule()(async (parent, args, ctx, info) => {
//     let isExactValidSiteAdminStudyCreate = false;
//     try {
//       const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//       const parsedIdToken: CognitoTokenClaims = 
//         new CryptoUtilityService().parseToken(idToken);
//       if (parsedIdToken) {
//         isExactValidSiteAdminStudyCreate = parsedIdToken.orgs
//           .split('|')
//           .includes(ctx.req.body.variables.createStudyInput.orgResourceIds[0]);
//       }
//     } catch (e) {
//       console.log('Error in checking is a valid site admin', e);
//       throw new ForbiddenException();
//     }
//     console.log('Is a valid site admin create a study ', isExactValidSiteAdminStudyCreate);
//     return isExactValidSiteAdminStudyCreate;
//   });

//   export const isExactSiteAdminUpdate = rule()(async (parent, args, ctx, info) => {
//     let isExactValidSiteAdminUpdatStudy = false;
//     try {
//       const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//       const parsedIdToken: CognitoTokenClaims = 
//         new CryptoUtilityService().parseToken(idToken);
//       if (parsedIdToken) {
//         isExactValidSiteAdminUpdatStudy = parsedIdToken.orgs
//           .split('|')
//           .includes(ctx.req.body.variables.createStudyInput.orgResourceIds[0]);
//       }
//     } catch (e) {
//       console.log('Error in checking is a valid site admin', e);
//       throw new ForbiddenException();
//     }
//     console.log('Is a valid site admin create a study ', isExactValidSiteAdminUpdatStudy);
//     return isExactValidSiteAdminUpdatStudy;
//   });
  
  

//   export const isExactSiteUser = rule()(async (parent, args, ctx, info) => {
//     let isExactValidSiteUser = false;
//     try {
//       const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//       const parsedIdToken: CognitoTokenClaims = 
//         new CryptoUtilityService().parseToken(idToken);
//       if (parsedIdToken) {
//         isExactValidSiteUser = parsedIdToken.orgs
//           .split('|')
//           .includes(ctx.req.body.variables.orgResourceId);
//       }
//     } catch (e) {
//       console.log('Error in checking is site user', e);
//       throw new ForbiddenException();
//     }
//     console.log('Is a valid site user', isExactValidSiteUser);
//     return isExactValidSiteUser;
//   });