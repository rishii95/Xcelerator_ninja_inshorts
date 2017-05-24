import React from 'react';
import { connect } from 'react-redux';
import { getUsers,increment,addBookMark,getBookMark,changeView } from '../actions/items';
import Main from './Main.component';

const mapStateToProps = (state) => {
    return {
        users: state.userItems,
        BookMarkUsers:state.BookMarkItems,
        view:state.setView,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBookMark: (index,users,BookMarkUsers) => dispatch(addBookMark(index,users,BookMarkUsers)),
        getUsers: (url) => dispatch(getUsers(url)),
        increment:(users,index)=>dispatch(increment(users,index)),
        getBookMark: () => dispatch(getBookMark()),
        changeView: (view)=>dispatch(changeView(view)),


            };
}
var App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
