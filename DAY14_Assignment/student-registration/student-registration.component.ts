import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

/**
 * Q5(a): Custom validator — checks that the date of birth entered corresponds
 * to an age of at least `minAge` years, as of today.
 *
 * Returns { underAge: { requiredAge, actualAge } } if the student is too young,
 * otherwise null.
 */
export function minimumAgeValidator(minAge: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // let Validators.required handle the empty case
    }

    const dob = new Date(control.value);
    if (isNaN(dob.getTime())) {
      return null; // invalid date format — not this validator's job
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // If the birthday hasn't happened yet this calendar year, subtract a year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age >= minAge ? null : { underAge: { requiredAge: minAge, actualAge: age } };
  };
}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html'
})
export class StudentRegistrationComponent implements OnInit {
  studentForm!: FormGroup;
  submittedData: any = null;

  // Q5(b): Gender dropdown options
  genderOptions: string[] = ['Male', 'Female', 'Prefer not to say'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      // --- Base fields from the original Student Registration form ---
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      course: ['', [Validators.required]],

      // --- Q5(a): Date of Birth, required + must be at least 16 years old ---
      dateOfBirth: ['', [Validators.required, minimumAgeValidator(16)]],

      // --- Q5(b): Gender, required dropdown ---
      gender: ['', [Validators.required]]
    });
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.submittedData = this.studentForm.value;
      console.log('Student registered successfully:', this.submittedData);
    } else {
      // Force every validation message to render, even on untouched fields
      this.studentForm.markAllAsTouched();
      console.log('Registration form is invalid. Please review the highlighted fields.');
    }
  }

  onReset(): void {
    this.studentForm.reset();
    this.submittedData = null;
  }
}
