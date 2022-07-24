import {AppState} from "./state.model";
import {WizardPages} from "../types/enums";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable, NgZone} from "@angular/core";
import {GeneralClient} from "../types/general-client";
import {DiscardForm, SubmitAddressPage, SubmitClientPage, SubmitIdentityPage} from "./actions";
import {Client} from "../types/client";
import {Address} from "../types/address";
import {Identity} from "../types/identity";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

export const INITIAL_FORM: GeneralClient = {
  client: {
    name: '',
    lastName: '',
    birthDate: '',
    clientGroup: []
  },
  address: {
    country: '' as unknown as number,
    city: '' as unknown as number,
  },
  identity: {
    documentType: '' as unknown as number,
    number: '',
    issueDate: ''
  },
}

export const STATE_DEFAULTS: AppState = {
  activePage: WizardPages.Client,
  clients: [],
  form: INITIAL_FORM,
  selectedClientIndex: null
}


@State<AppState>({
  name: 'AppState',
  defaults: STATE_DEFAULTS
})
@Injectable()
export class RootState {

  constructor(private router: Router,
              private zone: NgZone,
              private _snackBar: MatSnackBar) {
  }

  @Selector()
  public static getActivePage(state: AppState): WizardPages {
    return state.activePage
  }

  @Selector()
  public static getClients(state: AppState): GeneralClient[] {
    return state.clients
  }

  @Selector()
  public static getSelectedClient(index: number) {
    return function (state: { AppState: AppState }): GeneralClient | null {
      return state.AppState.clients[index]
    }
  }

  @Selector()
  public static getForm(state: AppState): GeneralClient {
    return state.form
  }

  @Selector()
  public static getClientForm(state: AppState): Client {
    return state.form.client
  }

  @Selector()
  public static getAddressForm(state: AppState): Address {
    return state.form.address
  }

  @Selector()
  public static getIdentityForm(state: AppState): Identity {
    return state.form.identity
  }


  @Action(SubmitClientPage)
  public submitClientPage(ctx: StateContext<AppState>, action: SubmitClientPage): void {
    const state = ctx.getState();
    ctx.patchState({
      form: {
        ...state.form,
        client: action.client
      },
      activePage: WizardPages.Address
    })
  }

  @Action(SubmitAddressPage)
  public submitAddressPage(ctx: StateContext<AppState>, action: SubmitAddressPage): void {
    const state = ctx.getState();
    ctx.patchState({
      form: {
        ...state.form,
        address: action.address
      },
      activePage: WizardPages.Identity
    })
  }

  @Action(SubmitIdentityPage)
  public submitIdentityPage(ctx: StateContext<AppState>, action: SubmitIdentityPage): void {
    const state = ctx.getState();
    const client = {
      ...state.form,
      identity: action.identity
    };
    const clients = [...state.clients, client];
    const index = state.clients.length;

    ctx.patchState({
      form: INITIAL_FORM,
      clients,
      activePage: WizardPages.Client
    })

    this._snackBar.open('Client has been created', 'close')

    this.zone.run(() => this.router.navigate(['clients', index]))
  }

  @Action(DiscardForm)
  public discardForm(ctx: StateContext<AppState>, action: DiscardForm): void {
    ctx.patchState({
      form: INITIAL_FORM,
      activePage: WizardPages.Client
    })
  }
}
