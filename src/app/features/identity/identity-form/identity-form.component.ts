import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IdentityForm} from "./form";
import {Dictionary} from "../../../types/dictionary";
import {DOCUMENTTYPES} from "../../../data/document-types";
import {Store} from "@ngxs/store";
import {SubmitIdentityPage} from "../../../_state/actions";


@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.scss']
})
export class IdentityFormComponent implements OnInit {

  form: FormGroup = IdentityForm();

  documentTypes: Dictionary[] = DOCUMENTTYPES

  fileName = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onFileSelected($event: any) {
    const file: File = $event.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new SubmitIdentityPage(this.form.value));
    }
  }

}
