import {SET_IMAGE, SET_VALUES, ValuesActionTypes} from './actions';

export interface UserState {
    formValues: Record<string, string>;
    image: string | null;
}

const initialState: UserState = {
    formValues: {},
    image: null,
};

export function counterReducer(
    state = initialState,
    action: ValuesActionTypes,
): UserState {
    switch (action.type) {
        case SET_VALUES:
            return {
                ...state,
                formValues: action.formValues ? action.formValues : state.formValues,
            };
        case SET_IMAGE:
            return {
                ...state,
                image: action.image ? action.image : state.image,
            };
        default:
            return state;
    }
}