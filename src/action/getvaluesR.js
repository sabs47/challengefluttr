export const getrand = (values=[]) => {
    return {
        type: 'RAND_SELECTED',
        payload: values
    }
};