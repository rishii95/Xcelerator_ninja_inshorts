import { combineReducers } from 'redux';
import { userItems} from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems
});

export default rootReducer;