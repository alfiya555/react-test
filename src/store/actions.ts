export const SET_VALUES = 'SET_VALUES';
export const SET_IMAGE = 'SET_IMAGE';

interface SetValuesAction {
    type: string;
    formValues?: Record<string, string>;
    image?: string;
}

export type ValuesActionTypes = SetValuesAction;

export const setFormValues = (formValues: Record<string, string>) => ({
    type: SET_VALUES,
    formValues,
});

export const setImage = (image: string) => ({
    type: SET_IMAGE,
    image,
});