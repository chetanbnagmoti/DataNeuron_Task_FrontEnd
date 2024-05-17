import axios from "axios"
import { CLEAR_USER_ADDED_MESSAGE, CLEAR_USER_DELETE_MESSAGE, CLEAR_USER_EDIT_MESSAGE, USER_ADDED_FAIL, USER_ADDED_REQUEST, USER_ADDED_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_EDIT_FAIL, USER_EDIT_REQUEST, USER_EDIT_SUCCESS, USER_GET_FAIL, USER_GET_REQUEST, USER_GET_SUCCESS } from "../constant/user.constant";

//Get User List:-
export const usersListAll = () => async (dispatch) => {
    try {
        dispatch({ type: USER_GET_REQUEST });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/`,
            config
        );

        dispatch({ type: USER_GET_SUCCESS, payload: res.data });

    } catch (error) {
        dispatch({ type: USER_GET_FAIL, payload: error });
    }
};

//Add User Action:-
export const userAdded = (data) => async (dispatch) => {
    try {
        dispatch({ type: USER_ADDED_REQUEST });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const body = {
            name: data.name
        };

        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/add`,
            body,
            config
        );
        console.log(res);
        if (res.data.status != 200) {
            dispatch({ type: USER_ADDED_FAIL, payload: { message: res.data.message } });
        } else {
            dispatch({ type: USER_ADDED_SUCCESS, payload: { message: res.data.message } });
        }
    } catch (error) {
        dispatch({ type: USER_ADDED_FAIL, payload: error });
    }
};

export const clearUserAddMessage = () => {
    return {
        type: CLEAR_USER_ADDED_MESSAGE,
    };
};


//Edit User Action:-
export const updatedUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: USER_EDIT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = {
            name: data.name,
            id: data._id,
        };

        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/edit`, body, config);
        if (res.data.status !== 200) {
            dispatch({ type: USER_EDIT_FAIL, payload: { userUpdateMassage: res.data.message } });
        } else {
            dispatch({ type: USER_EDIT_SUCCESS, payload: { userUpdateMassage: res.data.message } });
        }
    } catch (error) {
        dispatch({ type: USER_EDIT_FAIL, payload: error });
    }
};

export const clearUserUpdateMessage = () => {
    return {
        type: CLEAR_USER_EDIT_MESSAGE,
    };
};


//Delete User Action:-
export const deleteUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const body = {
            Id: userId,
        };

        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/delete`,
            body,
            config,
        );


        dispatch({ type: USER_DELETE_SUCCESS, payload: { userDeletemessage: res.data.message } });

    } catch (error) {
        dispatch({ type: USER_DELETE_FAIL, payload: error });

    }
};

export const clearUserDeleteMessage = () => {
    return {
        type: CLEAR_USER_DELETE_MESSAGE,

    }
};
