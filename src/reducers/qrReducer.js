import { SET_RESULT } from '../actions/types';

const initialState = {
    result: 'No Result',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_RESULT:
            return { ...state, result: action.payload }
            break;
        default:
            return state;
    }
}