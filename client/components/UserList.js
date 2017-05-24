import React from 'react';
import PhotoComponent from './PhotoComponent';
import NavBarComponent from './NavBarComponent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BookmarkCollection from 'material-ui/svg-icons/image/collections-bookmark';
import {Link} from 'react-router';


class UserList extends React.Component{
constructor(props){
	super(props);
	this.state=
	{
		data:this.props.users,
        dataBM:this.props.BookMarkUsers
       	}

}
 addBM(txtval) {
       	  console.log(this.props.BookMarkUsers);
      	 this.props.addBookMark(txtval,this.props.users,this.props.BookMarkUsers);
      	 	this.setState({dataBM: this.props.BookMarkUsers});
      	
	   }
    componentDidMount(){
        console.log("rissshi");
        console.log(this.state.data);
        
        this.props.getUsers("https://api.myjson.com/bins/12ch95");


    }
	    shouldComponentUpdate(){
            console.log('should Component Update Called');
          
            return true;
        }
          componentWillUpdate(){
            console.log('Component Will Update Called');
                    console.log(this.state.data);

        }
        componentDidUpdate(){
            console.log('Component Did Update Called');
        }	

    render(){
        const style={
            position: 'fixed',
            bottom: '10px',
            right: '10px'
        }
    	                console.log(this.props.users);
                  let filterUser=this.props.users;
            var view;
        if (this.props.view == 1) {
            view = 	<ul>
          	{filterUser.map((item,index)=>{
                        return <PhotoComponent addbm={this.addBM.bind(this)} post={item} i={index} key={index} {...this.props}/>
          		})}
          	</ul>
        }
        else if (this.props.view == 0) {
            console.log("Inside diff view",this.props.BookMarkUsers);
            view = 	<ul>
          	{this.props.BookMarkUsers.map((item,index)=>{
                        return <PhotoComponent addbm={this.addBM.bind(this)} post={item} i={index} key={index} {...this.props}/>
          		})}
          	</ul>
        }

        return (

        <div className="container">
        <NavBarComponent {...this.props} />
          {view}
        </div>)
    }
};


export default UserList;