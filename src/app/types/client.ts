import {Gender} from "./gender";

export interface Client {
  name: string,
  middleName?: string,
  lastName: string,
  birthDate: string,
  phoneNumber?: string,
  gender?: Gender,
  clientGroup: number[],
  coordinator?: number,
  dontSendSms?: boolean
}

