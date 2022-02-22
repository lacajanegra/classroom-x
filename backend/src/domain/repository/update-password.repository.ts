export abstract class UpdatePasswordRepository {
    abstract updatePassword(password: string, userId: string): Promise<void>
}