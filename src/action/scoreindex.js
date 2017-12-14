export const selectscore = (score=[]) => {
    console.log("You clicked on car: ", score);
    return {
        type: 'SCORE_SELECTED',
        payload: score
    }
};