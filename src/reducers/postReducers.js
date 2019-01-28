import { AMBIL_DATA } from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case AMBIL_DATA:
        return action.posts;
        default:
            return state
    }
}
