import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function AtLeast1LowerCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            const stringToArray = control.value.split('');
            const hasLowerCase = stringToArray.some((el: string) => {
                return el.toUpperCase() !== el;
            });
            return hasLowerCase ? null : { atLeast1LowerCase: true };
        } else {
            return null;
        }
    }
}