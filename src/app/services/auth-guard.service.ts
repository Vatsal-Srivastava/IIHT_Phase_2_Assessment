import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserService } from './user.service';
import { Store } from '@ngrx/store';
import { getAuth } from '../state/users/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  logstr = false;
  constructor(private userService: UserService, private router: Router) {
    // this.store.select(getAuth).subscribe((val)=>{
    //   this.logstr = val;
    // })
  }

  canActivate(state: RouterStateSnapshot): boolean {
    //returning checkLoggedIn function if user is Authenticated or not
    return this.checkLoggedIn(state.url);
  }
  checkLoggedIn(url: string): boolean {
    // console.log(sessionStorage.key(0));
    if (sessionStorage.key(0)) {
      return true;
    }

    this.userService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
