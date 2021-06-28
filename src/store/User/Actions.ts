import { IUser } from '../../interfaces/User'
import { SET_USERS, SET_USER, UPDATE_USER, DELETE_USER  } from './Types'

export const setUsers = (users: IUser[]) => {
    return {
        type: SET_USERS,
        payload: users
    }
}
export const setUser = (user: IUser) => {
    return {
        type: SET_USER,
        payload: user
    }
}
export const updateUser = (user: IUser) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export const deleteUser = (user: IUser) => {
    return {
        type: DELETE_USER,
        payload: user
    }
}
