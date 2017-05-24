export function userItems(state = [], action) {
    console.log('insdide reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}
export function BookMarkItems(state = [], action) {
        console.log("BM",state);

    console.log('insdide reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAYING_BOOK_MARKED':
            return action.Bm;

        default:
            return state;
    }
}
export function LikeItems(state = [], action) {
        console.log("likesss",state);

    console.log('insdide reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAYING_LIKED':
            return action.like;

        default:
            return state;
    }
}
export function DisLikeItems(state = [], action) {
        console.log("Dislikesss",state);

    console.log('insdide reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAYING_DISLIKED':
            return action.Dislike;
        default:
            return state;
    }
}
export  function userLikes(state = [], action) {
            console.log("Inside userLikes",state);
    switch (action.type) {
        case 'INCREMENT_LIKES':

            var index = action.index;
            
            console.log("Inside userLikes",state);
            return [
                ...state.slice(0, index),
                {...state[index], like: state[index].like + 1 },
                ...state.slice(index + 1)
            ];
    console.log(action);
    default:
    return state;
    }
}
export function setView(state=1,action){
    switch(action.type){
        case 'VIEW_CHANGED':
            return action.view;
        default:
            return state;    
    }
}

