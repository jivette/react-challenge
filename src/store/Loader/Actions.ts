import { ILoading } from '../../interfaces/IDefault'
import { SET_LOADER, CLEAR } from './Types'

export const setLoader = (loading: ILoading) => {
    return {
        type: SET_LOADER,
        payload: loading
    }
}

export const Clear = () => {
    return {
        type: CLEAR
    }
}
