import { AbstractControl } from "@angular/forms";

export const validate = (fieldControl: AbstractControl): boolean => {
  return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
};
