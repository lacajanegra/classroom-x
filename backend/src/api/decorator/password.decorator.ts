import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';
import { failDetails, passwordValidate } from 'src/api/helpers/password.validator';

export function Password(validationOptions?: ValidationOptions) {

    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: PasswordConstraint
        });
    };
}

@ValidatorConstraint({ name: 'Password' })
export class PasswordConstraint implements ValidatorConstraintInterface {

    validate(value: any, args: ValidationArguments) {
        return passwordValidate(value) === true
    }

    defaultMessage(args: ValidationArguments) {
        const details: any[] = failDetails(args.value)
        return `The ${args.property} is weak! - ` + details.map( (value) => { return `[${value.message}]` } )
    }

}