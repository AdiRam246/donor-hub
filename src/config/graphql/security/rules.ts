// import { rule } from 'graphql-shield';
// import { CognitoJwtVerifier } from 'aws-cognito-jwt-verifier';
// import { CryptoUtilityService } from '../../../common/utility/crypto.utility';
// import { CognitoTokenClaims } from 'src/common/entity/cognito.token.claims.';
// import { defaultroles } from '../../../enums/DefaultRoles';
// import { ForbiddenException } from 'src/exceptions/forbidden.exception';
// import { UnAuthenticatedException } from 'src/exceptions/unauthenticated.exception';
// import { ServerResponse } from 'http';
// import {
//   AdminInitiateAuthCommand,
//   AuthFlowType,
//   CognitoIdentityProvider,
//   InitiateAuthCommand,
// } from '@aws-sdk/client-cognito-identity-provider';

// const ID_TOKEN_HEADER = 'id-token';
// const REFRESH_TOKEN_HEADER = 'refresh-token';
// const REFRESHED_TOKEN_HEADER = 'refreshed-token';
// const ACCESS_CONTROL_HEADER = 'Access-Control-Expose-Headers';

// function getToken(authHeader: string) {
//   return authHeader.replace('Bearer ', '');
// }

// export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
//   let isValidToken = false;
//   try {
//     const token = getToken(ctx.req.headers.authorization);
//     const verify = new CognitoJwtVerifier();
//     const checkJwtResponse = JSON.parse(
//       await verify.checkJwt(
//         token,
//         process.env.AWS_REGION,
//         process.env.AWS_COGNITO_USER_POOL_ID,
//       ),
//     ) as any;
//     isValidToken = checkJwtResponse.status;
//     console.log('token valid', isValidToken);
//   } catch (e) {
//     console.log('Error in validating token', e);
//     try {
//       const authToken = await generateTokenFromRefreshToken(
//         ctx.req.headers[REFRESH_TOKEN_HEADER],
//         ctx.req.headers[ID_TOKEN_HEADER],
//       );
//       (ctx.req.res as ServerResponse).setHeader(
//         REFRESHED_TOKEN_HEADER,
//         authToken,
//       );
//       isValidToken = true;
//     } catch (error) {
//       console.log('Error in generating refresh token', error);
//       throw new UnAuthenticatedException();
//     }
//     throw new UnAuthenticatedException();
//   }
//   if (!isValidToken) {
//     try {
//       const authToken = await generateTokenFromRefreshToken(
//         ctx.req.headers[REFRESH_TOKEN_HEADER],
//         ctx.req.headers[ID_TOKEN_HEADER],
//       );
//       if (!(ctx.req.res as ServerResponse).getHeader(REFRESHED_TOKEN_HEADER))
//         (ctx.req.res as ServerResponse).setHeader(
//           REFRESHED_TOKEN_HEADER,
//           authToken,
//         );
//       isValidToken = true;
//     } catch (error) {
//       console.log('Error in generating refresh token', error);
//       throw new ForbiddenException();
//     }
//   }
//   (ctx.req.res as ServerResponse).setHeader(ACCESS_CONTROL_HEADER, '*');

//   return isValidToken;
// });

// export const isSystemAdmin = rule()(async (parent, args, ctx, info) => {
//   let isValidSystemAdmin = false;
//   try {
//     const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//     const parsedIdToken: CognitoTokenClaims =
//       new CryptoUtilityService().parseToken(idToken);
//     isValidSystemAdmin = parsedIdToken.roles
//       .split('|')
//       .includes(defaultroles.ROLE_SYSTEM_ADMIN.roleShortCode);
//   } catch (e) {
//     console.log('Error in checking is admin', e);
//     throw new ForbiddenException();
//   }
//   console.log('Is system admin', isValidSystemAdmin);
//   return isValidSystemAdmin;
// });

// export const isSiteAdmin = rule()(async (parent, args, ctx, info) => {
//   let isValidSiteAdmin = false;
//   try {
//     const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//     const parsedIdToken: CognitoTokenClaims =
//       new CryptoUtilityService().parseToken(idToken);
//     if (parsedIdToken) {
//       isValidSiteAdmin = parsedIdToken.roles
//         .split('|')
//         .includes(defaultroles.ROLE_ORG_ADMIN.roleShortCode);
//       //console.log(ctx.req.body.variables);
//     }
//   } catch (e) {
//     console.log('Error in checking is site admin', e);
//     throw new ForbiddenException();
//   }
//   console.log('Is site admin', isValidSiteAdmin);
//   return isValidSiteAdmin;
// });

// export const isSiteUser = rule()(async (parent, args, ctx, info) => {
//   let isValidSiteUser = false;
//   try {
//     const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//     const parsedIdToken: CognitoTokenClaims =
//       new CryptoUtilityService().parseToken(idToken);
//     if (parsedIdToken) {
//       isValidSiteUser = parsedIdToken.roles
//         .split('|')
//         .includes(defaultroles.ROLE_SITE_USER.roleShortCode);
//     }
//   } catch (e) {
//     console.log('Error in checking is site user', e);
//     throw new ForbiddenException();
//   }
//   console.log('Is site user', isValidSiteUser);
//   return isValidSiteUser;
// });

// async function generateTokenFromRefreshToken(
//   refreshToken: string,
//   idToken: string,
// ) {
//   const provider = new CognitoIdentityProvider({
//     region: process.env.AWS_REGION,
//     credentials: {
//       accessKeyId: process.env.AWS_CLIENT_ID,
//       secretAccessKey: process.env.AWS_CLIENT_SECRET,
//     },
//   });

//   const parsedIdToken: CognitoTokenClaims =
//     new CryptoUtilityService().parseToken(idToken);
//   const refreshTokenAuth = new AdminInitiateAuthCommand({
//     ClientId: process.env.AWS_COGNITO_CLIENT_ID,
//     UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
//     AuthFlow: AuthFlowType.REFRESH_TOKEN_AUTH,
//     AuthParameters: {
//       REFRESH_TOKEN: refreshToken,
//       SECRET_HASH: hashSecret(
//         process.env.AWS_COGNITO_CLIENT_SECRET,
//         parsedIdToken.sub,
//         process.env.AWS_COGNITO_CLIENT_ID,
//       ),
//     },
//   });
//   const response = await provider.send(refreshTokenAuth);
//   return response.AuthenticationResult.AccessToken;
// }

// function hashSecret(clientSecret, username, clientId) {
//   let crypto = require('crypto');
//   return crypto
//     .createHmac('SHA256', clientSecret)
//     .update(username + clientId)
//     .digest('base64');
// }

// export function getIdpIdFromToken(token: string) {
//   const parsedIdToken: CognitoTokenClaims =
//     new CryptoUtilityService().parseToken(token);
//   return parsedIdToken.sub;
// }

// export const orgvaladition = rule()(async (parent, args, ctx, info) => {
//   let isAuthenticatedSite = false;
//   try {
//     const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//     const parsedIdToken: CognitoTokenClaims =
//       new CryptoUtilityService().parseToken(idToken);
//     if (isSiteAdmin) {
//       isAuthenticatedSite = parsedIdToken.orgs
//         .split('|')
//         .includes(ctx.req.body.variables.orgResourceId);
//       console.log(isAuthenticatedSite);
//     }
//   } catch (e) {
//     console.log('Error in checking the site access', e);
//     throw new ForbiddenException();
//   }
//   console.log(' Is site admin have access to this site', isAuthenticatedSite);
//   return isAuthenticatedSite;
// });


// export const createUser = rule()(async (parent, args, ctx, info) => {
//   let isAuthenticatedSite = false;
//   try {
//     const idToken = ctx.req.headers[ID_TOKEN_HEADER];
//     const parsedIdToken: CognitoTokenClaims =
//       new CryptoUtilityService().parseToken(idToken);
//     if (isSiteAdmin) {
//       isAuthenticatedSite = parsedIdToken.orgs
//         .split('|')
//         .includes(
//           ctx.req.body.variables.createUserInput.orgUserRole[0].organizationId,
//         );
//     }
//   } catch (e) {
//     console.log('Error in checking the site access', e);
//     throw new ForbiddenException();
//   }
//   console.log(
//     ' Is site admin have access to create the user to this site',
//     isAuthenticatedSite,
//   );
//   return isAuthenticatedSite;
// });
