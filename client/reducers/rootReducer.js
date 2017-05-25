import { combineReducers } from 'redux';
import { userItems,BookMarkItems,setView,LikeItems,DisLikeItems,routeView} from './items';

var rootReducer = combineReducers({
    userItems,
    BookMarkItems,
    setView,
    LikeItems,
    DisLikeItems,
    routeView
});

export default rootReducer;