export interface IContract {
  ClientId: string,
  ContractorId: string,
  terms: string,
  status: 'new' | 'in progress' | 'terminated'
}