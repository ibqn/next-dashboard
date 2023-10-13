export enum TeamAccess {
  user = 'user',
  manager = 'manager',
  admin = 'admin',
}

export type TeamColumn = {
  id: number
  name: string
  access: TeamAccess
  age: number
  phone: string
  email: string
}
