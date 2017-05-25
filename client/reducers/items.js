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

export function setView(state=1,action){
    switch(action.type){
        case 'VIEW_CHANGED':
            return action.view;
        default:
            return state;    
    }
}
export function routeView(state=1,action){
    switch(action.type){
        case 'ROUTE_CHANGED':
            return action.view;
        default:
            return state;    
    }
}

