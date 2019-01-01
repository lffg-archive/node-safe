export interface IBankStore {
  name: string // The name of the store.
  uid: string //  The user login method (username, email...).
  val: string //  The password.
}

export interface IBank {
  id: string // uuid
  name: string // não encriptado [@ref 1]
  password: string
  store: IBankStore[]
}

export interface IBankOptions {
  name: string
  password: string // not encripted at this time
}

export interface IBankData {
  id: string // uuid
  name: string // não encriptado [@ref 1]
  path: string
}
