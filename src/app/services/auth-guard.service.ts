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
export class AuthGuard implements CanActivate {
  logstr = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store
  ) {

    this.store.select(getAuth).subscribe((val)=>{
      this.logstr = val;
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLoggedIn(state.url);
  }
  checkLoggedIn(url: string): boolean {
    if (this.logstr) {
      console.log('Auth');
      return true;
    }

    this.userService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
