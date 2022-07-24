import {Client} from "../../../types/client";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export function ClientForm(data: Partial<Client> = {}) {
  return new FormGroup({
    name: new FormControl(data.name || '', Validators.required),
    middleName: new FormControl(data.middleName || ''),
    lastName: new FormControl(data.lastName || '', Validators.required),
    birthDate: new FormControl(data.birthDate || '', Validators.required),
    phoneNumber: new FormControl(data.phoneNumber || '', [
      Validators.required,
      Validators.minLength(11)
    ]),
    gender: new FormControl(data.gender || ''),
    clientGroup: new FormControl(data.clientGroup || [], Validators.required),
    coordinator: new FormControl(data.coordinator || ''),
    dontSendSms: new FormControl(data.dontSendSms || ''),
  })
}
