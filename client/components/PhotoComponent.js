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
     console.log("color",this.state.DisbgColor);
     if(this.state.DisbgColor==null)
      	 {	    
                if(this.state.bgColor=='blue')
                {
                    this.setState({like: this.props.post.like});
                    this.setState({bgColor: null }); 

                }
               this.setState({dislike: this.props.post.dislike+1});
                this.setState({
                    DisbgColor: 'red'
                });   
           }
             else
             {
                      console.log("else",this.state.DisbgColor);

                 	this.setState({dislike: this.props.post.dislike});
                    this.setState({DisbgColor: null });   
           
             }   
            }
    render() {
        // var BMcolor=null;
        // console.log("bmcolor",this.props.post.id==this.props.BookMarkUsers.id);
        // for(var i=0;i<this.props.BookMarkUsers.length;i++)
        // {
        //     if(this.props.post.id==this.props.BookMarkUsers.id)
        //     BMcolor='yellow';
        //     else
        //     BMcolor=null;
        // }
        var index=this.props.i;
        var lvalue=this.props.post.like;
        var lcolor=null;
        var flag =false;
       
              for(var k=0;k<this.props.TotalLikes.length;k++)
              {
            if(this.props.post.id==this.props.TotalLikes[k].id)
            {
                lvalue=this.props.post.like+1;
                lcolor="blue";
                break;
            }
              }
        console.log("LikeItems total",this.props.TotalLikes[index]);
    const style = {
       marginBottom:15

      }
      const FlatBtnstyle = {
      height:60

      }
        return (
            <div>
    <Card className="row" style={style}>
    <CardMedia className="col-md-6">
<Link to={`/view/${this.props.post.login}`}>
        <img src={this.props.post.avatar_url}  width="300"/>
</Link>    
    </CardMedia>
    <div className="col-md-6">
    <CardTitle title="Card title"/>
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
      <FlatButton style={FlatBtnstyle} onClick={this.addDislikes.bind(this)}><Badge badgeContent={this.state.dislike} badgeStyle={{ top:10,left: 12}}><span className="glyphicon glyphicon-thumbs-down" style={{color:this.state.DisbgColor}}></span> Dislike</Badge></FlatButton>
      <FlatButton style={FlatBtnstyle} onClick={this.AddsBookMark.bind(this)}><Badge  badgeStyle={{ display:'none'}}><span className="glyphicon glyphicon-bookmark" style={{color:this.state.bmcolor}}></span> Bookmark</Badge></FlatButton>
    </CardActions>
    </div>
  </Card>
                          </div>
        );
    }
}