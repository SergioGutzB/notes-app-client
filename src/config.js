export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "demo1-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://demo-notes-app.auth.us-east-1.amazoncognito.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_EK0ye6m6d",
    APP_CLIENT_ID: "sq14kq3ihs21k6jtlk6rb7p5",
    IDENTITY_POOL_ID: "us-east-1:f3e415ae-1e63-4741-8037-a93c8561f0fb"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};