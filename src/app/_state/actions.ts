import {getActionName} from "../helpers/helper";
import {Client} from "../types/client";
import {Address} from "../types/address";
import {Identity} from "../types/identity";

const stateName = 'APP';
const createAction = getActionName(stateName);

export class SubmitClientPage {
  public static readonly type = createAction('SubmitClientPage');

  constructor(public client: Client) {
  }
}

export class SubmitAddressPage {
  public static readonly type = createAction('SubmitAddressPage');

  constructor(public address: Address) {
  }
}

export class SubmitIdentityPage {
  public static readonly type = createAction('SubmitIdentityPage');

  constructor(public identity: Identity) {
  }
}

export class DiscardForm {
  public static readonly type = createAction('DiscardForm');

  constructor() {
  }
}

