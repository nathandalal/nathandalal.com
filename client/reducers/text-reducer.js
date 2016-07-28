import { TEXT_RECEIVED } from './../actions/index'

export function TextReducer(state = null, action) {
    switch(action.type) {
        case TEXT_RECEIVED:
            return action.payload.data.text
    }
    return state
}