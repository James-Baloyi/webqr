import axios from "axios";
import { SET_RESULT } from './types';

// export function fetchPosts() {
//     return function (dispatch) {

//         axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: data,
//             });
//         });

//     }
// }


export function setResult(data) {

    console.log(data)

    return function (dispatch) {
        dispatch({
            type: SET_RESULT,
            payload: data,
        });
    }
}



