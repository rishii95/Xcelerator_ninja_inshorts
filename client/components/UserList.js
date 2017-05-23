import React from 'react';
import PhotoComponent from './PhotoComponent';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class UserList extends React.Component{
constructor(props){
	super(props);
	this.state=
	{
		data:this.props.users
       	}

}
    componentDidMount(){
        console.log("rissshi");
        console.log(this.state.data);
        
        this.props.getUsers("https://api.github.com/users");


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
    	                console.log(this.props.users);
                  let filterUser=this.props.users;


        return (

        <div>
          	<ul>
          	{filterUser.map((item,index)=>{
                        return <PhotoComponent post={item} i={index} key={index} {...this.props}/>
          		})}
          	</ul>

        </div>)
    }
};


export default UserList;