import { saveState, loadState } from "../actions/actions";

const initialState = loadState();

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        /*obrabotka drugix deystviy,  */

        default: return state;
        /* in case of mistate return to this point */
    
    }
};

export default rootReducer;