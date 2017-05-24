import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    }

  }
  handleChange(value) {
    this.setState({
      value: value,
    });
  };
  changeViews(value) {
      if(this.props.view!=value)
    this.props.changeView(!this.props.view);
  }

  render() {
      const styles = {
 marginBottom:'10px',
 marginLeft:'10px'
 
};
    return (
        
      <div className="container">
          <Tabs value={this.state.value} onChange={this.handleChange.bind(this)} style={styles}>
        <Tab label="Cards" value="a" onClick={this.changeViews.bind(this, 1)}></Tab>
        <Tab label="BookMarks" value="b" onClick={this.changeViews.bind(this, 0)}></Tab>
 </Tabs>
      </div>

    )
  }
};


export default NavBarComponent;