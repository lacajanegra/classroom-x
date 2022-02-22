export abstract class PasswordRepository {
    abstract createHash(password: string): Promise<string>
    abstract validate(password: string, hash: string): Promise<boolean>
}