import {combineReducers} from 'redux';
import playersredurcer from './players-redurcer';
import ActiveUserReducer from './selectreduercers';
import ActivecarReducer from './selectedvehicle-redurcer';
import vehicleredurcer from './vehicles-redurcer'
import ramdomvalue from './ramdomvalues'
import selectrand from './recieveramdomvalues'
import getscore from './score-redurcers'
import getwiner from './colorredurcers'

const allPlayers = combineReducers({
    player: playersredurcer,
    vehicle:vehicleredurcer,
    activeUser: ActiveUserReducer,
    aciveCar:ActivecarReducer,
    getramdomvalue:ramdomvalue,
    loadscore:getscore,
    activerand:selectrand,
    checkcolor:getwiner
});

export default allPlayers
