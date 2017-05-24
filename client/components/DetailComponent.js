import React from 'react';
import PhotoComponent from './PhotoComponent';
export default class DetailComponent extends React.Component{
    constructor(props){
	super(props);
	this.state=
	{
		data:this.props.users,
        dataBM:this.props.BookMarkUsers,
        dataLike:this.props.TotalLikes
       	}

}
    addLikess(index) {
      	 this.props.changeLikess(index,this.props.users,this.props.TotalLikes);
      	 	this.setState({dataLike: this.props.TotalLikes});
	   }
    render(){
        //fetch the parameter from url!
        //post store the array of object after iteration from findIndex
        var code =this.props.params.login;
        const index =this.props.users.findIndex((post)=>post.login===code);
        const currPost =this.props.users[index];
        return(
            <div>
                <h1> DetailComponent</h1>
 			    <PhotoComponent  addl={this.addLikess.bind(this)} post={currPost} {...this.props} i={index}/>
          </div>
        );
    }
}


