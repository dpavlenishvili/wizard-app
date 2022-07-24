export interface Identity {
  documentType: number,
  series?: string,
  number: string,
  issuedBy?: string,
  issueDate: string,
  file?: File
}
