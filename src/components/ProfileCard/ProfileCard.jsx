import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProfileCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 300,
  },
});

export default function ProfileCard() {
  const classes = useStyles();

  return (
      <div className='flex-container'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/Ptk7n58.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Robert Perillo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Salesman/Audio Engineer turned Software Developer. Whether technical or client facing, I have experience stepping through varying challenges. I have exceeded my quarterly sales goals in both prior sales roles while maintaining multiple other technical operations. I thrive on constructive criticism and believe there is always more to learn, regardless of the subject. I work well in team environments and respect the time that people give to me to further my knowledge base. I offer a unique perspective and creative problem solving skills to help reach the desired team and/or individual objective.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
