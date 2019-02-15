import {
    IMAGES_GET_IMAGES_REQUEST,
    IMAGES_GET_IMAGES_SUCCESS,
    IMAGES_GET_IMAGES_FAILURE,
} from '../types';

const DEFAULT_STATE = {
    images: [],
    imgCount: 10,
    isLoading: {
        getting: false,
        updating: false,
        creating: false,
    },
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case IMAGES_GET_IMAGES_REQUEST: return {
            ...state,
            isLoading: {
                ...state.isLoading,
                getting: true,
            },
        };
        case IMAGES_GET_IMAGES_SUCCESS: return {
            ...state,
            images: action.payload.images,
            imgCount: action.payload.imgCount,
            isLoading: {
                ...state.isLoading,
                getting: false,
            },
        };
        case IMAGES_GET_IMAGES_FAILURE: return {
            ...state,
            isLoading: {
                ...state.isLoading,
                getting: false,
            },
        };
        default: return state;
    }
}
