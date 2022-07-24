import {Identity} from "../../../types/identity";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export function IdentityForm(data: Partial<Identity> = {}) {
  return new FormGroup({
    documentType: new FormControl(data.documentType || '', Validators.required),
    series: new FormControl(data.series || ''),
    number: new FormControl(data.number || '', Validators.required),
    issuedBy: new FormControl(data.issuedBy || ''),
    issueDate: new FormControl(data.issueDate || '', Validators.required),
    file: new FormControl(data.file || ''),
  })
}
