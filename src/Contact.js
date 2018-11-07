import React from 'react'
import './Home.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    input: {
      color: "white"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
  });

const theme = createMuiTheme({
    palette: {
        root:{
            color: '#ffffff',   
        },
      primary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff',
        contrastText: '#fff',
      },
      secondary: {
        light: 'ffffff',
        main: 'ffffff',
        dark: '#ffffff',
        contrastText: '#fffff',
      },
    },overrides: { MuiFormLabel: {
        root: {
          color: "white",
          "&$focused": {
            color: "white"
          }
        },
        input: {
            color: 'white'
        }
      }}
  });

  function Contact(props) {
    const { classes } = props;
        return (
            <ParallaxBanner
            layers={[
                {
                    image: 'http://www.desktopimages.org/pictures/2015/1019/1/black-texture-background-abstract-772155.jpg',
                    amount: 0.3,
                    slowerScrollRate: false,
                },

            ]}
            style={{
                height: '700px',
            }}
        >
        <h1 class='something'>Contact Me</h1>
            <div class="me" >

            <form action="https://formspree.io/listonryley@gmail.com" method="POST">
            <MuiThemeProvider theme={theme}>
            <TextField       InputProps={{
        className: classes.input
      }}
      label='Name' variant='outlined' color='primary' type="text" name="name"/>
      <br></br>
      <br></br>
      <TextField       InputProps={{
        className: classes.input
      }}
      label='Email' variant='outlined' color='primary' type="email" name="_replyto"/>
  <br></br>
  <br></br>
  <TextField style={{margin:8 }} InputProps={{ className: classes.input}} multiline label='Your Message' variant='outlined' color='primary' type="text" name="message"/>
  <br></br>
  <br></br>
  <input type="submit" value="Send"/>
  </MuiThemeProvider>
    </form>
            </div>
        </ParallaxBanner>
            
        )
    }
export default withStyles(styles)(Contact);