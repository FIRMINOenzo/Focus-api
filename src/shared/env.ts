import * as dotenv from 'dotenv';

const getEnv = () => ({
  app: {
    id: process.env.APP_ID,
    env: process.env.APP_ENV,
    name: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    version: process.env.APP_VERSION,
    port: process.env.PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: parseInt(process.env.JWT_EXPIRES_IN ?? '1800'),
  },
  db: {
    mongo: process.env.MONGO_URL,
  },

  isProduction(): boolean {
    return (
      env.app.env !== 'local' &&
      env.app.env !== 'development' &&
      env.app.env !== 'homolog'
    );
  },
});

dotenv.config();

export const env = getEnv();
