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

   
