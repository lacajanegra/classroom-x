const Validator = require ('password-validator');

const PasswordValidator = new Validator();

PasswordValidator
    .is().min(8)                                    // Minimum length 8
    .is().max(32)                                   // Maximum length 32
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().symbols(2)                               // Must have at least 2 symbols
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123', 'abcd1234']); // Blacklist these values


export function passwordValidate(value: string): boolean {
    return <boolean>PasswordValidator.validate(value)
}

export function failDetails(value: string): any[] {
    return <any[]>PasswordValidator.validate(value, { details: true })
}