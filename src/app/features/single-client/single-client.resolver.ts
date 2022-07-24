import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, take, tap} from 'rxjs';
import {Store} from "@ngxs/store";
import {RootState} from "../../_state/state";

@Injectable({
  providedIn: 'root'
})
export class SingleResolver implements Resolve<any> {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id'];

    return this.store.select(RootState.getSelectedClient(id))
      .pipe(
        take(1),
        tap((client) => {
          if (!client) this.router.navigate(['clients'])
        }),
      );
  }
}
