import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
/////
////
//this.props.i calls action.js which calls reducer
////
export default class PhotoComponent extends React.Component {

    render() {
    const style = {
       marginBottom:15

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
      <FlatButton> <span className="glyphicon glyphicon-thumbs-up"></span> Like </FlatButton>
      <FlatButton> <span className="glyphicon glyphicon-thumbs-down"></span> Dislike </FlatButton>
      <FlatButton> <span className="glyphicon glyphicon-bookmark"></span> Bookmark </FlatButton>

    </CardActions>
    </div>
  </Card>
                          </div>
        );
    }
}