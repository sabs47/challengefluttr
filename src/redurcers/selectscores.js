export default function (state = null, action) {
    switch (action.type) {
        case 'SCORE_SELECTED':
            return action.payload;
            break;
    }
    return state;
}