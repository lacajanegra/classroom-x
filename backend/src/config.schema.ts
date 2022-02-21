import * as Joi from 'joi';

export const configValidationSchema = Joi.object().keys({
    NODE_PORT: Joi.string().default(3000).required(),
    DATABASE_URL: Joi.string().optional().allow(''),
    DB_HOST: Joi.string().when('DATABASE_URL', { is: Joi.exist(), then: Joi.optional().allow(''), otherwise: Joi.required() }),
    DB_PORT: Joi.number().when('DATABASE_URL', { is: Joi.exist(), then: Joi.optional().allow(''), otherwise: Joi.required() }),
    DB_USER: Joi.string().when('DATABASE_URL', { is: Joi.exist(), then: Joi.optional().allow(''), otherwise: Joi.required() }),
    DB_PASS: Joi.string().when('DATABASE_URL', { is: Joi.exist(), then: Joi.optional().allow(''), otherwise: Joi.required() }),
    DB_NAME: Joi.string().when('DATABASE_URL', { is: Joi.exist(), then: Joi.optional().allow(''), otherwise: Joi.required() }),
    DB_SSL: Joi.boolean().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().required()
})
