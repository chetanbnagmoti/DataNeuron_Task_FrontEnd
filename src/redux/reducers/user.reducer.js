import {
    CLEAR_USER_ADDED_MESSAGE,
    CLEAR_USER_DELETE_MESSAGE,
    CLEAR_USER_EDIT_MESSAGE,
    USER_ADDED_FAIL,
    USER_ADDED_REQUEST,
    USER_ADDED_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_EDIT_FAIL,
    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_GET_FAIL,
    USER_GET_REQUEST,
    USER_GET_SUCCESS
} from "../constant/user.constant";

const initialState = {
    getLoading: false,
    getSuccess: false,
    data: [],
    error: false,
    addLoading: false,
    addMessage: "",
    addError:false,
    addSuccess: false,
    updateLoading: false,
    updateMessage: '',
    updateSuccess: false,
    updateError:false,
    deleteLoading: false,
    deleteSuccess: false,
    deleteMessage: '',
    deleteError:false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get User List
        case USER_GET_REQUEST:
            return {
                ...state,
                getLoading: true,
                getSuccess: false,
            };
        case USER_GET_SUCCESS:
            return {
                ...state,
                getLoading: false,
                getSuccess: true,
                data: action.payload,
            };
        case USER_GET_FAIL:
            return {
                ...state,
                getLoading: false,
                getSuccess: false,
                error: action.payload,
            };

        // Add User
        case USER_ADDED_REQUEST:
            return {
                ...state,
                addLoading: true,
                addMessage: "",
                addSuccess: false,
            };
        case USER_ADDED_SUCCESS:
            return {
                ...state,
                addLoading: false,
                addMessage: action.payload.message,
                addSuccess: true,
            };
        case USER_ADDED_FAIL:
            return {
                ...state,
                addLoading: false,
                addMessage: action.payload.message,
                addSuccess: false,
                addError: true,
            };
        case CLEAR_USER_ADDED_MESSAGE:
            return {
                ...state,
                addLoading: false,
                addMessage: '',
                addSuccess: false,
                addError: false,
            };

        // Edit User
        case USER_EDIT_REQUEST:
            return {
                ...state,
                updateLoading: true,
                updateSuccess: false,
                updateMessage: '',
            };
        case USER_EDIT_SUCCESS:
            return {
                ...state,
                updateLoading: false,
                updateSuccess: true,
                updateMessage: action.payload.userUpdateMassage,
            };
        case USER_EDIT_FAIL:
            return {
                ...state,
                updateLoading: false,
                updateSuccess: false,
                updateError: true,
                updateMessage: action.payload.userUpdateMassage,
            };
        case CLEAR_USER_EDIT_MESSAGE:
            return {
                ...state,
                updateMessage: "",
                updateLoading: false,
                updateSuccess: false,
                updateError: false,

            };

        // Delete User
        case USER_DELETE_REQUEST:
            return {
                ...state,
                deleteLoading: true,
                deleteSuccess: false,
                deleteMessage: "",
            };
        case USER_DELETE_SUCCESS:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
                deleteMessage: action.payload.userDeletemessage,
            };
        case USER_DELETE_FAIL:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: false,
                deleteError: true,
                deleteMessage: action.payload.userDeletemessage,
            };
        case CLEAR_USER_DELETE_MESSAGE:
            return {
                ...state,
                deleteMessage: '',
                deleteError:false,
                deleteLoading: false,
                deleteSuccess: false,
            };

        default:
            return state;
    }
};

export default userReducer;
