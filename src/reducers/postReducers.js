import { AMBIL_DATA, ADD_DATA, DELETE_DATA } from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_DATA:
            let newData = state.slice()
                newData.splice(action.id, 0, action.payload)
            return newData
        case DELETE_DATA:
            let afterDel = state.slice()
            afterDel.splice(action.payload, 1)
            return afterDel
        case AMBIL_DATA:
            return action.posts;
        default:
            return state
    }
}
