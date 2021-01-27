export default () => ({
  port: process.env.PORT || 3001,
  mongodb: process.env.MONGODB_CONNECTION,
  nodemailer: {
    host: process.env.NODEMAILER_AUTH_HOST,
    port: process.env.NODEMAILER_AUTH_PORT,
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS
  }
});