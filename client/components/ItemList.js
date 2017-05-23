import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/items';
import Main from './Main.component';

const mapStateToProps = (state) => {
    return {
        users: state.userItems
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (url) => dispatch(getUsers(url)),
            };
}
var App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
