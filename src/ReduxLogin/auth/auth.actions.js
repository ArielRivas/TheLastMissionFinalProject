import { checkUser } from "../../helpers/auth.helper";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (userName, password, redirectTo) => dispatch => {
    const user = checkUser(userName, password);

    const action = {
        type: LOGIN_USER,
        payload: user
    }

    dispatch(action);

    if (user) {
        redirectTo();
    }
}
