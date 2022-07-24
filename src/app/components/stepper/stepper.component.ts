import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {WizardPages} from "../../types/enums";
import {GeneralClient} from "../../types/general-client";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {RootState} from "../../_state/state";
import {DiscardForm} from "../../_state/actions";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  public activePage$: Observable<WizardPages>;
  public form$: Observable<GeneralClient>;

  steps = Object.values(WizardPages);

  constructor(private router: Router,
              private store: Store) {
    this.form$ = this.store.select(RootState.getForm);
    this.activePage$ = this.store.select(RootState.getActivePage)
      .pipe(
        tap((page) => this.router.navigate(['client-form', page]))
      );
  }

  ngOnInit(): void {
  }


  onStepClick(step: string) {
    // this.router.navigate(['client-form', step]);
  }

  onDiscardChanges() {
    this.store.dispatch(new DiscardForm())
      .pipe(
        tap(() => this.router.navigate(['clients']))
      )
      .subscribe();
  }

}
