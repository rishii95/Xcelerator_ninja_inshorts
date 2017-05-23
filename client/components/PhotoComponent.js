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
    }
    
  }
  

 addlikes() {
     console.log("color",this.state.bgColor);
     if(this.state.bgColor==null)
      	 {	this.setState({like: this.props.post.like+1});
                this.setState({
                    bgColor: 'blue'
                });   
           }
             else
             {
                      console.log("else",this.state.bgColor);

                 {	this.setState({like: this.props.post.like});
                    this.setState({bgColor: null });   

           }
             }   
            }
    render() {
        
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
      <FlatButton style={FlatBtnstyle} onClick={this.addlikes.bind(this)}><Badge badgeContent={this.state.like} badgeStyle={{ top:10,left: 12}}><span className="glyphicon glyphicon-thumbs-up" style={{color:this.state.bgColor}}></span> Like</Badge></FlatButton>
      <FlatButton style={FlatBtnstyle} ><Badge badgeContent={this.state.dislike} badgeStyle={{ top:10,left: 12}}><span className="glyphicon glyphicon-thumbs-down" id="DislikeBtn"></span> Dislike</Badge></FlatButton>
      <FlatButton style={FlatBtnstyle}><Badge  badgeStyle={{ display:'none'}}><span className="glyphicon glyphicon-bookmark" ></span> Bookmark</Badge></FlatButton>

    </CardActions>
    </div>
  </Card>
                          </div>
        );
    }
}