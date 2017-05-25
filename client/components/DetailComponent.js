import React from 'react';
import {Link} from 'react-router';
import PhotoComponent from './PhotoComponent';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

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
        const style = {
            float:'right',
            bottom:'0px'
        };
          const styles = {
                marginBottom:'10px',
                marginLeft:'10px'
                };
        //fetch the parameter from url!
        //post store the array of object after iteration from findIndex
        console.log("Detailssssssssss");
        var code =this.props.params.login;
        const index =this.props.users.findIndex((post)=>post.login===code);
        const currPost =this.props.users[index];
        return(
            <div className="container">
                <Link to={`/`}>
                <Tabs  style={styles}>
                        <Tab label="Back to Cards" value="a"></Tab>
                </Tabs>              
                 </Link>
 			    <PhotoComponent  addbm={this.addBM.bind(this)} addl={this.addLikess.bind(this)} addDis={this.addDisLikess.bind(this)} post={currPost} {...this.props} i={index}/>
          </div>
        );
    }
}


