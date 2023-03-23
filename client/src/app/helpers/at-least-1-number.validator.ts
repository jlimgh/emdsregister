import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function AtLeast1Number(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            const stringToArray = control.value.split('').map(Number);
            const hasNumber = stringToArray.some((el: number) => {
                return !isNaN(el);
            });
            return hasNumber ? null : { atLeast1Number: true };
        } else {
            return null;
        }
    }
}