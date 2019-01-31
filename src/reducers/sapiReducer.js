import { AMBIL_SAPI } from '../actions/types';

export default function sapiReducer(state = [], action) {
    switch (action.type) {
        case AMBIL_SAPI:
        return action.sapis;
        default:
            return state
    }
}
