import React from 'react';
import PhotoComponent from './PhotoComponent';
export default class DetailComponent extends React.Component{
    constructor(props){
	super(props);
	this.state=
	{
		data:this.props.users,
        dataBM:this.props.BookMarkUsers,
        dataLike:this.props.TotalLikes,
        dataDisLike:this.props.TotalDisLikes

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
    render(){
        //fetch the parameter from url!
        //post store the array of object after iteration from findIndex
        var code =this.props.params.login;
        const index =this.props.users.findIndex((post)=>post.login===code);
        const currPost =this.props.users[index];
        return(
            <div>
                <h1> Card Details</h1>
 			    <PhotoComponent  addbm={this.addBM.bind(this)} addl={this.addLikess.bind(this)} addDis={this.addDisLikess.bind(this)} post={currPost} {...this.props} i={index}/>
          </div>
        );
    }
}


