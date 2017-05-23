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
        return (
            <div>
    <Card>
    <CardMedia>
<Link to={`/view/${this.props.post.login}`}>
                    <img src={this.props.post.avatar_url}  width="300"/>
                </Link>    
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
{this.props.post.login}
    </CardText>
    <CardActions>
      <FlatButton label="Like" />
      <FlatButton label="Dislike" />
    </CardActions>
  </Card>
                          </div>
        );
    }
}