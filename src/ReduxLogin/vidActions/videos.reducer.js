import * as actions from "./videos.actions";

const INITIAL_STATE = {
    isEvil: false,
}

const videosReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case actions.CREATE_VIDEO: {
           return {...state.videos, isEvil: true };
        }default: {
            return state;
        }
    } 
}
export default videosReducer;