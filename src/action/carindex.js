export const selectCar = (car=[]) => {
    console.log("You clicked on car: ", car);
    return {
        type: 'CAR_SELECTED',
        payload: car
    }
};