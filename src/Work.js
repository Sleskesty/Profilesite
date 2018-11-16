import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-scroll-parallax';
import CardMedia from '@material-ui/core/CardMedia';
import img from './Full.png'
const styles = theme => ({
    card: {
        maxWidth: 370,    
        padding: 5,
        textAlign: 'center',
      },
      root: {
        flexGrow: 1,
      },
      media: {
          height:140,
      }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
      <div class='work'>
    <Grid container spacing={24} justify='center' alignItems='center'>
    <Grid item>
    <Parallax
        offsetXMax={-10}
        offsetXmin={20}
         slowerScrollRate
                tag="figure">
    <Card className={classes.card}>
    <CardMedia
          className={classes.media}
          image='https://i.imgur.com/4QaiZXd.png'
          title="Contemplative Reptile"/>
      <CardContent>
        <Typography variant="h6" component="h2">
        Mock Store Application
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Technology used: Javascript, Express, Vue, Vuex,Smmtiii
          ii Material, Mongo
        </Typography>
        <Typography component="p">
          Store application using Vue to create a store experiance and to explore Vue within the scope of two weeks.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://github.com/Sleskesty/Vueapp'>Learn More</Button>
      </CardActions>
    </Card>
    </Parallax>
    </Grid>
    <Grid item>
    <Parallax
        offsetXMax={10}
        offsetXmin={-20}
         slowerScrollRate
                tag="figure">
       <Card className={classes.card}>
       <CardMedia
          className={classes.media}
          image= {img}
          title="Contemplative Reptile"/>
       <CardContent>
         <Typography variant="h6" component="h2">
         Inventory Tracker
         </Typography>
         <Typography className={classes.pos} color="textSecondary">
           Technology used: Javascript, Express, React, Material, Mongo
         </Typography>
         <Typography component="p">
          Inventory system used to track games with images and descriptions. Also allows for the ability to edit and delete items in the database.
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small" href='https://dreamy-beaver-5945ba.netlify.com/'>Learn More</Button>
       </CardActions>
     </Card>
     </Parallax>
     </Grid>
     </Grid>
     </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);