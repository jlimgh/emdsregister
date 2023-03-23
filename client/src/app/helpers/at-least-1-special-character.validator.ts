import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function AtLeast1SpecialChar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            const specialChars = ['!', '@', '#', '%', '^', '&', '*', '=', '_', '+', '?'];
            const stringToArray = control.value.split('');
            const hasSpecialChar = stringToArray.some((el: string) => {
                return specialChars.includes(el);
            });
            return hasSpecialChar ? null : { atLeast1SpecialChar: true };
        } else {
            return null;
        }
    }
}