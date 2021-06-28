
export interface IUser {
    name: string,
    email: string,
    phone: string,
    country: string,
}

export interface UserStore {
    users : IUser[]
}