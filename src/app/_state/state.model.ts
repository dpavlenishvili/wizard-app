import {WizardPages} from "../types/enums";
import {GeneralClient} from "../types/general-client";

export interface AppState {
  activePage: WizardPages,
  clients: GeneralClient[],
  form: GeneralClient,
  selectedClientIndex: number | null
}
