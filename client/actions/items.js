export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function userFetchDataSuccess(users) {
    //console.log(items);
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}
            var BookMarkUsers=[];

export function getUsers(url){
    return (dispatch)=>{
        fetch(url).then((response)=>{
            return response;
        })
        .then((response) => response.json())
        .then((users) => dispatch(userFetchDataSuccess(users)))
        .catch(() => dispatch(itemsHasErrored(true)));
    }
}

export function addBookMark(index,users,BookMarkUsers){
return (dispatch)=>{
    console.log("Inside Bookmark",users[index]);
            BookMarkUsers.push(users[index]);

                dispatch(getBookMark(BookMarkUsers));
        
    }
    console.log("Inside Bookmark",BookMarkUsers);
}
   export function getBookMark(Bm){

    return {
        type: 'DISPLAYING_BOOK_MARKED',
        Bm

    }
    } 
export function increment(users,index){
    console.log("inside increment",users);
    return{
        type:'INCREMENT_LIKES',
        users,
        index
    };
}
export function changeView(view){
    return {
        type:'VIEW_CHANGED',
        view
    }
}
