import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function OnlyAlphaNumeric(): ValidatorFn {  
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            const ALPHA_NUMERIC_REGEX = /^[A-Za-z0-9]*$/;
            if (ALPHA_NUMERIC_REGEX.test(control.value)) {
                return null;
            } else {
                return { onlyAlphaNumeric: true };
            }
        } else {
            return null;
        }
    }
}
