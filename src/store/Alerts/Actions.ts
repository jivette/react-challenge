import { StateAlert } from '../../interfaces/IDefault'
import { OPEN_ALERT,CLOSE_ALERT, CLEAR } from './Types'

export const openAlert = (alert: StateAlert) => {
    return {
        type: OPEN_ALERT,
        payload: alert
    }
}

export const closeAlert = () => {
    return {
        type: CLOSE_ALERT
    }
}

export const Clear = () => {
    return {
        type: CLEAR
    } 
}
