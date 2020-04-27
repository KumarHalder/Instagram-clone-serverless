import { CustomAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda'
import 'source-map-support/register'

//import { verify, decode } from 'jsonwebtoken'
import { verify } from 'jsonwebtoken'
import { createLogger } from '../../utils/logger'
//import Axios from 'axios'
//import { Jwt } from '../../auth/Jwt'
import { JwtPayload } from '../../auth/JwtPayload'

const logger = createLogger('auth')

// TODO: Provide a URL that can be used to download a certificate that can be used
// to verify JWT token signature.
// To get this URL you need to go to an Auth0 page -> Show Advanced Settings -> Endpoints -> JSON Web Key Set
const cert = "-----BEGIN CERTIFICATE-----" + 
"MIIDBzCCAe+gAwIBAgIJUrijDf8iqHutMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNV"+
"BAMTFmRldi13bzlpeGZqdi5hdXRoMC5jb20wHhcNMjAwNDI3MTExMzI0WhcNMzQw"+
"MTA0MTExMzI0WjAhMR8wHQYDVQQDExZkZXYtd285aXhmanYuYXV0aDAuY29tMIIB"+
"IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt6Eb7rXnk6aN1IIMnOUBFVTw"+
"qKLMFdBICnBuZalSzJOtj3xCT46mqJRPoCzlu5ucw6W28FR9FQUc+TYyN83XQtnd"+
"i8Cytvez4QarHxoqA+hIOPJMjE9jFS2NTGo1uF08obSFAH5Ch5GAVkIW4OGsWk86"+
"aATM8SfOwrwrlP6e46A3ZOQ6W+b4K7md/G6Z6dzC+NZAV2jZMisCdofzdFjSN1p2"+
"ySGPSDhbqdlhmC0pXhzFmDjqoQjCIR1lX1NNpNAZdj7O77Vd49P3oK8HeHwBxlUU"+
"ca5Rtvw0AMMTNpC80y+2dn8qkrhS/w5EGATJsYKR36ZK32R87whhOeN0xCdSIQID"+
"AQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSQmADfuLqsH2MbDC1P"+
"vl4xtDndWzAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAHX804zB"+
"ZAR99LssQsJF8mXnv5lexaW/XWXJl+yGEjs8GE57lKy81iiVwd8+aEF3HB8HLIrS"+
"63BGbx/uaXROrpgD7E2PPMsc4mrql6DI3uBhHwnvO2/YTQ7sV+HR+s1kqfoFTdZW"+
"KU51VSRkt5/+nno4J2OdoCxA87u6G/8xwrVxuEF6WFDsnZbzZMdMAz53kuwvXLZh"+
"oankglvQLftBd62YVERfJQQaN3oJCA6seExf0prexLZo862+QYCpLxmFbIbnlGXB"+
"O7iunDmaK2XjYMZy2O1+2oxIeBbZfuqkCxgoJVQV09Kf2sgXuT/e3lEbX33BmOdY"+
"WRr8JgJAfX1FkBM="+
"-----END CERTIFICATE-----"


//const jwksUrl = '...'

export const handler = async (event: CustomAuthorizerEvent): Promise<CustomAuthorizerResult> => {
  logger.info('Authorizing a user', event.authorizationToken)
  
  try {
    const jwtToken = await verifyToken(event.authorizationToken)
    logger.info('User was authorized', jwtToken)

    return {
      principalId: jwtToken.sub,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*'
          }
        ]
      }
    }
  } catch (e) {
    logger.error('User not authorized', { error: e.message })

    return {
      principalId: 'user',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Deny',
            Resource: '*'
          }
        ]
      }
    }
  }
}

async function verifyToken(authHeader: string): Promise<JwtPayload> {
  const token = getToken(authHeader)
  //const jwt: Jwt = decode(token, { complete: true }) as Jwt

  // TODO: Implement token verification
  // You should implement it similarly to how it was implemented for the exercise for the lesson 5
  // You can read more about how to do this here: https://auth0.com/blog/navigating-rs256-and-jwks/
  
  return verify(token, cert, { algorithms: ['RS256'] }) as JwtPayload
}

function getToken(authHeader: string): string {
  if (!authHeader) throw new Error('No authentication header')

  if (!authHeader.toLowerCase().startsWith('bearer '))
    throw new Error('Invalid authentication header')

  const split = authHeader.split(' ')
  const token = split[1]

  return token
}

