import { combineReducers } from 'redux';
import { userItems,userLikes,BookMarkItems,setView,LikeItems} from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookMarkItems,
    setView,
    LikeItems
});

export default rootReducer;