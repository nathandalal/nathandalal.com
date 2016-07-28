import axios from 'axios'

export const TEXT_RECEIVED = "TEXT_RECEIVED";

export function getText() {
    //needs to be FSA compliant for redux-promise library to work
    return {
        type: TEXT_RECEIVED,
        payload: axios.get("/api/lol")
    }
}