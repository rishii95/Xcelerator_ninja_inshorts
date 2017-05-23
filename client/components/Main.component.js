import React from 'react';
import  lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Main extends React.Component{
    render(){
        return (              
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            {React.cloneElement(this.props.children,this.props)}
        </div>
        </MuiThemeProvider>
        )

    }
};


export default Main;