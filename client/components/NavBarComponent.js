import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  changeViews(value) {
    this.props.changeView(!this.props.view);
  }

  render() {
    return (
      <div className="navDiv">
        <RaisedButton label="Cards" primary={true} onClick={this.changeViews.bind(this, 1)}/>
        <RaisedButton label="Bookmarks" secondary={true} onClick={this.changeViews.bind(this, 0)}/>        
      </div>

    )
  }
};


export default NavBarComponent;