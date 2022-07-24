import {Address} from "../../../types/address";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export function addressForm(data: Partial<Address> = {}) {
  return new FormGroup({
    index: new FormControl(data.index || ''),
    country: new FormControl(data.country || '', Validators.required),
    city: new FormControl({value: data.city || '', disabled: !data.country}, Validators.required),
    area: new FormControl(data.area || ''),
    street: new FormControl(data.street || ''),
    house: new FormControl(data.house || '')
  })
}
