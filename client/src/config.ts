// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'fyqb5o0om3'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'simsoe-serverless.eu.auth0.com', // Auth0 domain
  clientId: 'U51B4Srimx8GfVCZDjPJnZnu5TNfnPLM', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
