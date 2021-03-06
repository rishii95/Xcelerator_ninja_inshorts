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
        dataBM:this.props.BookMarkUsers,
        dataLike:this.props.TotalLikes,
        dataDisLike: this.props.TotalDisLikes
       	}

}
 addBM(index) {
      	 this.props.addBookMark(index,this.props.users,this.props.BookMarkUsers);
      	 	this.setState({dataBM: this.props.BookMarkUsers});
      	
	   }
       addLikess(index) {
      	 this.props.changeLikess(index,this.props.users,this.props.TotalLikes);
      	 	this.setState({dataLike: this.props.TotalLikes});
      	
	   }
        addDisLikess(index) {
      	 this.props.changeDisLikess(index,this.props.users,this.props.TotalDisLikes);
      	 	this.setState({dataDisLike: this.props.TotalDisLikes});
      	
	   }
       BMaddBM(index) {
      	 this.props.addBookMark(index,this.props.BookMarkUsers,this.props.BookMarkUsers);
      	 	this.setState({dataBM: this.props.BookMarkUsers});
      	
	   }
       BMaddLikess(index) {
      	 this.props.changeLikess(index,this.props.BookMarkUsers,this.props.TotalLikes);
      	 	this.setState({dataLike: this.props.TotalLikes});
      	
	   }
        BMaddDisLikess(index) {
      	 this.props.changeDisLikess(index,this.props.BookMarkUsers,this.props.TotalDisLikes);
      	 	this.setState({dataDisLike: this.props.TotalDisLikes});
      	
	   }
       changeRoutes() {
      if(this.props.routeView!=1)
    this.props.changeRoute(!this.props.routeView);
  }
    componentDidMount(){
        console.log("rissshi");
        console.log(this.state.data);
        
        this.props.getUsers("http://localhost:8000/cards");


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
            console.log(this.props.BookMarkUsers.length);
        }	

    render(){
        {this.changeRoutes()};
        const style={
            position: 'fixed',
            bottom: '10px',
            right: '10px'
        }
    	                console.log(this.props.users);
                  let filterUser=this.props.users;
            var view;
        if (this.props.view == 1) {
            view = 	<ul className="container">
          	{filterUser.map((item,index)=>{
                        return <PhotoComponent addbm={this.addBM.bind(this)} addl={this.addLikess.bind(this)} addDis={this.addDisLikess.bind(this)}  post={item} i={index} key={index} {...this.props}/>
          		})}
          	</ul>
        }
        else if (this.props.view == 0) {
            console.log("Inside diff view",this.props.BookMarkUsers);
            if(this.props.BookMarkUsers.length==0)
            view=<div className="container"><h1>No Bookmarks</h1></div>
            else
            {
            view = 	<ul className="container">
          	{this.props.BookMarkUsers.map((item,index)=>{
                        return <PhotoComponent addbm={this.BMaddBM.bind(this)} addl={this.BMaddLikess.bind(this)} addDis={this.BMaddDisLikess.bind(this)} post={item} i={index} key={index} {...this.props}/>
          		})}
          	</ul>
            }
        }

        return (

        <div className="container">
        <NavBarComponent {...this.props} />
          {view}
        </div>)
    }
};


export default UserList;