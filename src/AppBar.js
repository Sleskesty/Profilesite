import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';   
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from './Home'
import Work from './Work'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Hobbies from './Hobbies'
import { createMuiTheme } from '@material-ui/core/styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './Contact'
import ScrollableAnchor from 'react-scrollable-anchor';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffbba7',
      main: '#000000',
      dark: '#b27765',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
               Ryley Liston
                </IconButton>
               <Button color="inherit" href='#home'>Home</Button>
                <Button color="inherit" href='#work'>Work</Button>
                <Button color="inherit" href='#about'>About Me</Button>
                <Button color="inherit" href='#contact'>Contact Me</Button>
                <Button color="inherit" href='https://www.linkedin.com/in/RyleyListon'>Linkedin</Button>
                </Toolbar>
            </AppBar>
            <ParallaxProvider>
            <ScrollableAnchor id={'home'}>
            <Home/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'work'}>
            <Work/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'about'}>
            <Hobbies/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
            <Contact/>
            </ScrollableAnchor>
            </ParallaxProvider>
        </div> 
    </MuiThemeProvider>
  );
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);