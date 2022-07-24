import {Client} from "./client";
import {Address} from "./address";
import {Identity} from "./identity";

export interface GeneralClient {
  client: Client,
  address: Address,
  identity: Identity
}
