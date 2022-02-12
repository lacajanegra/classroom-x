import * as Joi  from '@hapi/joi';

export const configValidationSchema = Joi.object({
    NODE_PORT: Joi.string().default(3000).required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432).required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.number().default(3600).required()
});
