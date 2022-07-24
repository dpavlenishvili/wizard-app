import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeneralClient} from "../../../types/general-client";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  singleClient: GeneralClient | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.singleClient = this.activatedRoute.snapshot.data['singleClient'];
    console.log(this.activatedRoute.snapshot.data['singleClient']);
  }

}
