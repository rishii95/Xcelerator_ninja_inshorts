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
var TotalLikes =[];
var TotalDisLikes =[];

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
    var flag=true,f=true;
return (dispatch)=>{
    for(var i=0;i<BookMarkUsers.length;i++)
    {
        
        if(users[index].id==BookMarkUsers[i].id)
       
       {     

           flag=false;
        BookMarkUsers.splice(i,1);
                 f=false;
       }    
}
    if(flag==true)
    {
                BookMarkUsers.push(users[index]);
    }
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
export function changeLikess(index,users,TotalLikes){
    var flag=true,f=true;
return (dispatch)=>{
  
    for(var i=0;i<TotalLikes.length;i++)
    {

        if(users[index].id==TotalLikes[i].id)
        {

        flag=false;
        TotalLikes.splice(i,1);
                 console.log("rrrrrrrrrrrrrrrrrrrrrr",TotalLikes.length);
                 f=false;
    }
    
    }
    if(flag==true||(TotalLikes.length==0&&f==true))
            TotalLikes.push(users[index]);

                dispatch(getTotalLikes(TotalLikes));
        
    }
}
 export function getTotalLikes(like){

    return {
        type: 'DISPLAYING_LIKED',
        like

    }
} 
export function changeDisLikess(index,users,TotalDisLikes){
    var flag=true,f=true;
return (dispatch)=>{
  
    for(var i=0;i<TotalDisLikes.length;i++)
    {

        if(users[index].id==TotalDisLikes[i].id)
        {

        flag=false;
        TotalDisLikes.splice(i,1);
                 console.log("rrrrrrrrrrrrrrrrrrrrrr",TotalDisLikes.length);
                 f=false;
    }
    
    }
    if(flag==true||(TotalDisLikes.length==0&&f==true))
            TotalDisLikes.push(users[index]);

                dispatch(getTotalDisLikes(TotalDisLikes));
        
    }
}
 export function getTotalDisLikes(Dislike){

    return {
        type: 'DISPLAYING_DISLIKED',
        Dislike

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
export function changeRoute(view){
    return {
        type:'ROUTE_CHANGED',
        view
    }
}
