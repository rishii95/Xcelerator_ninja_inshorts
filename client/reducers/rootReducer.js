import { combineReducers } from 'redux';
import { userItems,userLikes,BookMarkItems,setView,LikeItems,DisLikeItems} from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookMarkItems,
    setView,
    LikeItems,
    DisLikeItems
});

export default rootReducer;