import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getAuth,
  getCurrUser,
  getUsers,
} from 'src/app/state/users/user.selectors';
import { UserState } from 'src/app/state/users/user.state';
import { User } from '../user';
import { Router } from '@angular/router';

import { loadUsers, validateUser } from '../../state/users/user.actions';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private store: Store<UserState>,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  users: Observable<User[]> = this.store.select(getUsers);

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get name() {
    return this.loginForm.get('name')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  login() {

    this.store.dispatch(validateUser({ name: this.name, password: this.password }));
    // this.store.select(getAuth).subscribe((val) => console.log(val));
    this.store.select(getAuth).subscribe((val) => {
      if (val) {
        // console.log(this.userService.redirectUrl);
        this.router.navigateByUrl(this.userService.redirectUrl);
      }
    });
  }
  hide = true;
}
