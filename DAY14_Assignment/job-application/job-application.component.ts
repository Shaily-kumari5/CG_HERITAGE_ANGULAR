import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

/**
 * Q3: Custom validator — checks if a text field contains the word "badword".
 * Returns { hasProfanity: true } if found, otherwise null.
 *
 * Custom validators follow the signature: (control: AbstractControl) => ValidationErrors | null
 */
export function noProfanityValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  // Don't flag empty/optional fields — let `required` handle that separately.
  if (!value) {
    return null;
  }

  const containsProfanity = value.toString().toLowerCase().includes('badword');

  return containsProfanity ? { hasProfanity: true } : null;
}

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html'
})
export class JobApplicationComponent implements OnInit {
  jobApplicationForm!: FormGroup;
  submittedData: any = null;

  jobRoles: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'QA Engineer',
    'UI/UX Designer',
    'Project Manager'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Q2: Reactive form with all required fields and their validators
    this.jobApplicationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      yearsOfExperience: ['', [Validators.required, Validators.min(0), Validators.max(40)]],
      jobRole: ['', [Validators.required]],

      // Q3: noProfanityValidator attached directly to a FormControl
      additionalComments: ['', [noProfanityValidator]]
    });
  }

  // Convenience getter so the template can do `f.fullName.errors` instead of
  // `jobApplicationForm.get('fullName').errors`
  get f() {
    return this.jobApplicationForm.controls;
  }

  /**
   * Q4: onSubmit()
   * (a) checks form validity
   * (b) logs the data if valid
   * (c) shows all errors if invalid (via markAllAsTouched)
   */
  onSubmit(): void {
    if (this.jobApplicationForm.valid) {
      // (a) + (b) — form is valid, capture and log the data
      this.submittedData = this.jobApplicationForm.value;
      console.log('Form submitted successfully:', this.submittedData);
    } else {
      // (c) — form is invalid: mark every control as touched so that
      // every *ngIf="field.touched && field.invalid" block in the template
      // renders its error message immediately, even for fields the user
      // never clicked into.
      this.jobApplicationForm.markAllAsTouched();
      console.log('Form is invalid. Validation errors:', this.getFormValidationErrors());
    }
  }

  onReset(): void {
    this.jobApplicationForm.reset();
    this.submittedData = null;
  }

  // Helper used purely for the console.log in onSubmit() — collects every
  // control's error object into a single object, keyed by control name.
  private getFormValidationErrors(): Record<string, ValidationErrors> {
    const errors: Record<string, ValidationErrors> = {};
    Object.keys(this.jobApplicationForm.controls).forEach((key) => {
      const controlErrors = this.jobApplicationForm.get(key)?.errors;
      if (controlErrors) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }
}
