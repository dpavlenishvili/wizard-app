import { Component, OnInit } from '@angular/core';
import {addressForm} from "./form";
import {Country} from "../../../types/country";
import {COUNTRIES} from "../../../data/countries";
import {Store} from "@ngxs/store";
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {SubmitAddressPage} from "../../../_state/actions";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  form = addressForm();
  countries: Country[] = COUNTRIES;

  countriesMap: Record<number, Country> = this.countries.reduce((acc, curr) => ({
    ...acc, [curr.id]: curr
  }), {})
  selectedCountry: Country | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onCountryChange($event: MatSelectChange) {
    this.selectedCountry = this.countriesMap[$event.value]
    const cityControl = this.form.get('city') as FormControl;
    $event.value
      ? cityControl.enable()
      : cityControl.disable()
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.store.dispatch(new SubmitAddressPage(this.form.value));
    }
  }

}
