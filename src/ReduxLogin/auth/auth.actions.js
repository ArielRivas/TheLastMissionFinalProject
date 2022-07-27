

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (user, video, redirectTo) => dispatch => {


    const action = {
        type: LOGIN_USER,
        payload: {
            ...user, 
            video,
        }
    }

    dispatch(action);

    if (user) {
        redirectTo();
    }
}
