export default function (state = null, action) {
    switch (action.type) {
        case 'RAND_SELECTED':
            return action.payload;
            break;
    }
    return state;
}