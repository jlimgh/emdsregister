import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AtLeast1Number } from '../helpers/at-least-1-number.validator';
import { AtLeast1LowerCase } from '../helpers/at-least-1-lowercase.validator';
import { AtLeast1UpperCase } from '../helpers/at-least-1-uppercase.validator';
import { AtLeast1SpecialChar } from '../helpers/at-least-1-special-character.validator';
import { OnlyAlphaNumeric } from '../helpers/only-alpha-numeric.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Output()
  formSubmitted = new EventEmitter<User>();

  registrationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  get firstName() { return this.registrationForm.get('firstName')!; }
  get lastName() { return this.registrationForm.get('lastName')!; }
  get email() { return this.registrationForm.get('email')!; }
  get username() { return this.registrationForm.get('username')!; }
  get password() { return this.registrationForm.get('password')!; }

  ngOnInit(): void {
  }


  createForm() {
    this.registrationForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8), OnlyAlphaNumeric()]],
      password: [null, [Validators.required, Validators.minLength(8), AtLeast1UpperCase(), AtLeast1LowerCase(), AtLeast1Number(), AtLeast1SpecialChar()]]
    });
  }

  prepareForm(): User {
    const formDeepCopy = Object.assign({}, this.registrationForm.value);
    const postBody: User = {};
    postBody['firstName'] = formDeepCopy.firstName.toLowerCase();
    postBody['lastName'] = formDeepCopy.lastName.toLowerCase();
    postBody['email'] = formDeepCopy.email.toLowerCase();
    postBody['username'] = formDeepCopy.username;
    postBody['password'] = formDeepCopy.password;
    return postBody;
  }

  submitForm() {
    const preparedForm = this.prepareForm();
    this.formSubmitted.emit(preparedForm);
  }

}
