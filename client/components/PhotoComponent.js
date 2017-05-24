import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';

/////
////
//this.props.i calls action.js which calls reducer
////
export default class PhotoComponent extends React.Component {
constructor(props){
	super(props);
	this.state=
	{
		like:this.props.post.like,
        dislike:this.props.post.dislike,
        LikeView:0
           	}

}
getInitialState() {
    return {
      bgColor: null,
      DisbgColor:null,
      bmcolor:null
    }
    
  }
  
AddsBookMark() {
	this.props.addbm(this.props.i);
     this.setState({
                    bmcolor: 'yellow'
                }); 
	   }
 addlikes() {
     this.props.addl(this.props.i);
     this.setState({
                    bgcolor: 'blue'
                }); 
	   }
   
                
            
    addDislikes() {
    this.props.addDis(this.props.i);  
            }

 shouldComponentUpdate(newProps, newState) {
         console.log("Rrrrrrrrrrrr",this.props.BookMarkUsers.length);

      if(this.props.view==0 &&  this.props.BookMarkUsers.length==0)
    <h1>No Bookmarks</h1>
    return true;
   }
  
    render() {
        var index=this.props.i;
        var lvalue=this.props.post.like;
        var lcolor=null;
       var k=0;
              for(k=0;k<this.props.TotalLikes.length;k++)
              {
            if(this.props.post.id==this.props.TotalLikes[k].id)
            {
                lvalue=this.props.post.like+1;
                lcolor="blue";
                break;
            }
              }
        var dvalue=this.props.post.dislike;
        var dcolor=null;
              for(k=0;k<this.props.TotalDisLikes.length;k++)
              {
            if(this.props.post.id==this.props.TotalDisLikes[k].id)
            {
                dvalue=this.props.post.dislike+1;
                dcolor="red";
                break;
            }
              }
        var bcolor=null;
           for(k=0;k<this.props.BookMarkUsers.length;k++)
              {
            if(this.props.post.id==this.props.BookMarkUsers[k].id)
            {
                bcolor="yellow";
                break;
            }
              }
        const style = {
       marginBottom:15

      }
      const FlatBtnstyle = {
      height:60

    }
    var views;
    console.log("Rrrrrrrrrrrr",this.props.BookMarkUsers.length);
    if(this.props.view==0 &&  !this.props.BookMarkUsers.length)
    return (
            <div>
             <h1>No Bookmarks</h1>
            </div>
        );
    
    else{
     return (
            <div>
             <Card className="row" style={style}>
    <CardMedia className="col-md-6">
<Link to={`/view/${this.props.post.login}`}>
        <img src={this.props.post.avatar_url}  width="300"/>
</Link>    
    </CardMedia>
    <div className="col-md-6">
    <CardTitle><h1>{this.props.post.login}</h1></CardTitle>
    <CardText>
{this.props.post.login}
    </CardText>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <CardActions>
      <FlatButton style={FlatBtnstyle} onClick={this.addlikes.bind(this)}><Badge badgeContent={lvalue} badgeStyle={{ top:10,left: 12}}><span className="glyphicon glyphicon-thumbs-up" style={{color:lcolor}}></span> Like</Badge></FlatButton>
      <FlatButton style={FlatBtnstyle} onClick={this.addDislikes.bind(this)}><Badge badgeContent={dvalue} badgeStyle={{ top:10,left: 12}}><span className="glyphicon glyphicon-thumbs-down" style={{color:dcolor}}></span> Dislike</Badge></FlatButton>
      <FlatButton style={FlatBtnstyle} onClick={this.AddsBookMark.bind(this)}><Badge  badgeStyle={{ display:'none'}}><span className="glyphicon glyphicon-bookmark" style={{color:bcolor}}></span> Bookmark</Badge></FlatButton>
    </CardActions>

    </div>      </Card></div>
     )}
       
    }
}