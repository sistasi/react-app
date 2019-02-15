import {
    IMAGES_GET_IMAGES_REQUEST,
} from '../types';

export const getImages = (imgCount) => ({
    type: IMAGES_GET_IMAGES_REQUEST,
    payload: imgCount,
});