import { JwtModuleOptions } from "@nestjs/jwt";
import { ExtractJwt } from "passport-jwt";

const secret = process.env.JWT_SECRET || 'topSecret'

export const JwtConfig: JwtModuleOptions = {
    secret: secret,
    publicKey: process.env.JWT_PUBLIC_KEY || undefined,
    privateKey: process.env.JWT_PRIVATE_KEY || undefined,
    signOptions: {
        expiresIn: Number(process.env.JWT_EXPIRES_IN || '60')
    }
}

export const JwtStrategyConfig = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export const JwtPassportConfig = {
    defaultStrategy: 'jwt'
}