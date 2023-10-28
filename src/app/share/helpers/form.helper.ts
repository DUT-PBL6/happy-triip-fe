import { FormControl } from "@angular/forms";

export const validate = (fieldControl: FormControl): boolean => {
  return fieldControl.hasError("required") && (fieldControl?.dirty || fieldControl?.touched);
};
