import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const styles  = {
    font:{
        color:"#fff"
    }
}
export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#282c34"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title} style={styles.font}>
            DogeFreeFire
          </Typography>
          <Button color="inherit" style={styles.font}>Home</Button>
          <Button color="inherit" style={styles.font}>Contact</Button>
          <Button color="inherit" style={styles.font}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
