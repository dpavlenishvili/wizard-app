import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ClientForm} from "./form";
import {Gender} from "../../../types/gender";
import {Dictionary} from "../../../types/dictionary";
import {COORTINATORS} from "../../../data/coordinators";
import {ClientGroup} from "../../../data/client-group";
import {Store} from "@ngxs/store";
import {SubmitClientPage} from "../../../_state/actions";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  form: FormGroup = ClientForm();

  genderTypes = Object.values(Gender);
  clientGroup: Dictionary[] = ClientGroup;
  coordinators: Dictionary[] = COORTINATORS;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.controls)
    if (this.form.valid) {
      this.store.dispatch(new SubmitClientPage(this.form.value))
    }
  }

}
