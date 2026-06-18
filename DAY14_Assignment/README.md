# Angular Forms Assignment — Answers

## Q1. Template-Driven Forms vs Reactive Forms

**Template-Driven Forms**
- The form structure and validation logic live mostly in the **HTML template**, using directives like `ngModel`, `ngForm`, and `required`.
- Angular automatically creates the underlying `FormControl`/`FormGroup` objects behind the scenes — you rarely touch them directly.
- Uses two-way data binding (`[(ngModel)]`), so the model and view stay in sync automatically.
- Requires importing `FormsModule`.
- Simpler to set up for small forms, but harder to unit test, harder to scale, and harder to manage complex/conditional validation because logic is scattered across the template.

**Reactive Forms**
- The form structure is defined **explicitly in the component class** using `FormGroup`, `FormControl`, and `FormBuilder`.
- The template only binds to controls that already exist (`formControlName`, `formGroup`) — the component is the single source of truth.
- Requires importing `ReactiveFormsModule`.
- Gives access to observables like `valueChanges` and `statusChanges`, making it easy to add custom validators, dynamic fields, and cross-field validation.
- Much easier to unit test because all validation logic lives in TypeScript, not the template.

**When to choose each (real-world examples):**

| Scenario | Approach | Why |
|---|---|---|
| A simple "Subscribe to our Newsletter" box with just an email field | **Template-Driven** | Trivial validation, no dynamic behavior, fastest to wire up with `ngModel` |
| A "Contact Us" feedback form on a marketing site (name, email, message) | **Template-Driven** | One-off form, no need for custom validators or unit tests |
| A multi-step "Job Application" or "Loan Application" form with conditional fields (e.g., show "Company Name" only if employment status = "Employed") | **Reactive** | Needs dynamic add/remove of controls and conditional validators — much easier to manage in code |
| An e-commerce checkout form with multiple shipping addresses added dynamically (`FormArray`) and custom validators (e.g., postal code format, age check) | **Reactive** | Needs `FormArray`, custom validators, and programmatic control that template-driven forms struggle with |

---

## Q3. Custom Validator — Concept

A custom validator in Angular Reactive Forms is just a function with the signature:

```ts
(control: AbstractControl) => ValidationErrors | null
```

- If the control's value **fails** validation, the function returns an error object, e.g. `{ hasProfanity: true }`.
- If the control **passes**, the function returns `null`.
- Angular merges this with any other validators on the control, and the result appears in `control.errors`.

The full implementation (`noProfanityValidator`) and how it is attached to a `FormControl` is shown in **`job-application/job-application.component.ts`**, attached to the "Additional Comments" field.

---

## Q4. `markAllAsTouched()` — Concept

By default, Angular only shows a validation message once a control has been **touched** (the user clicked into it and then blurred/left it) or **dirty** (its value changed). This is intentional — Angular doesn't want to show "This field is required" on every empty field the instant the form loads.

The problem: if a user never touches a required field and immediately hits **Submit**, that field is still `untouched`, so any `*ngIf="field.touched && field.invalid"` check in the template stays `false` — the error never appears, and the user has no idea why the form didn't submit.

`form.markAllAsTouched()` solves this by marking **every control in the form (including nested `FormGroup`s and `FormArray`s)** as touched in one call. This forces all the `*ngIf` conditions tied to `.touched` to evaluate to `true`, so every validation message becomes visible the moment the user tries to submit an invalid form — even for fields they never interacted with.

The complete `onSubmit()` method (checks validity → logs data if valid → calls `markAllAsTouched()` and surfaces errors if invalid) is implemented in both `job-application.component.ts` and `student-registration.component.ts`.

```ts
onSubmit(): void {
  if (this.jobApplicationForm.valid) {
    // (a) form is valid — log the data
    console.log('Form submitted successfully:', this.jobApplicationForm.value);
  } else {
    // (b) form is invalid — touch every control so all error messages render
    this.jobApplicationForm.markAllAsTouched();
    console.log('Form is invalid. Errors:', this.getFormValidationErrors());
  }
}
```

---

## Q2 & Q5 — Code

See the code files:
- `job-application/job-application.component.ts` + `.html` — Job Application Reactive Form (Q2), including the `noProfanityValidator` (Q3) and full `onSubmit()` (Q4).
- `student-registration/student-registration.component.ts` + `.html` — Student Registration Form extended with Date of Birth (min-age-16 validator) and a required Gender dropdown (Q5).
