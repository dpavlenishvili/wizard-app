import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GeneralClient} from "../../../types/general-client";
import {RootState} from "../../../_state/state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataSource$: Observable<GeneralClient[]>;
  displayedColumns = [
    'name',
    'lastName',
    'gender',
    'birthDate',
    'actions'
  ]

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.dataSource$ = this.store.select(RootState.getClients);
  }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    this.router.navigate(['clients', index])
  }
}
