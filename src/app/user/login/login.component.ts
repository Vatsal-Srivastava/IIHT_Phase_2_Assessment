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

import { loadUsers, validateUser } from '../../state/users/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<UserState>) {}

  users: Observable<User[]> = this.store.select(getUsers);

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    // this.users.subscribe((ele) => {
    //   console.log(ele);
    // });
  }

  login() {
    this.store.dispatch(validateUser({ name: 'Anish', password: 'vatsal' }));
    this.store.select(getAuth).subscribe((val) => console.log(val));
  }
  hide = true;
}
