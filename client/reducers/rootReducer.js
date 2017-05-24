import { combineReducers } from 'redux';
import { userItems,userLikes,BookMarkItems,setView} from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookMarkItems,
    setView
});

export default rootReducer;