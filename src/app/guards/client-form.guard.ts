import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Store} from "@ngxs/store";
import {RootState} from "../_state/state";

@Injectable({
  providedIn: 'root'
})
export class ClientFormGuard implements CanActivate {
  constructor(private store: Store,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(RootState.getActivePage)
      .pipe(
        map((activePage) => {
          if (route.data['step'] !== activePage) {
            this.router.navigate(['client-form', activePage]);
            return false;
          } else {
            return true;
          }
        })
      );
  }

}
