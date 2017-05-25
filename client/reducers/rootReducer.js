import { combineReducers } from 'redux';
import { userItems,userLikes,BookMarkItems,setView,LikeItems,DisLikeItems,routeView} from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookMarkItems,
    setView,
    LikeItems,
    DisLikeItems,
    routeView
});

export default rootReducer;