import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private router: Router,
    private postService: RegistrationService
  ) { }

  ngOnInit(): void {
  }

  registerUser(user: User) {
    this.postService.registerUser(user)
      .subscribe({
        next: (res) => {
          console.log('user body: ', user);
          console.log('res: ', res);
          if (res.result) {
            this.router.navigate(['registration', 'complete']);
          } else {
            alert('Error registering user');
          }
        },
        error: (error) => {
          alert("Failed to create user");
          console.error(error);
        }
      });
  }

}
