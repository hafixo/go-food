import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  },
  button: {
    width: 200,
    height: 50
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://cdn.junglecreations.com/wp/junglecms/2018/07/556bb947-jw-photo-heinz-beanz-burger-1024x576.jpg"
            />
            <br />
            <br />
            <button
              style={{
                width: 40,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white"
              }}
            >
              -
            </button>
            <button
              style={{
                marginLeft: 5,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#FFD700"
              }}
            >
              +
            </button>
            <br />
            <br />
            <Button
              style={{ width: 200, height: 60, backgroundColor: "#9ACD32" }}
            >
              Beli Makanan
            </Button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://www.kfc.com.au/sites/default/files/WEBSITE_CATERING_768x432px_V2.jpg"
            />
            <br />
            <br />
            <button
              style={{
                width: 40,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white"
              }}
            >
              -
            </button>
            <button
              style={{
                marginLeft: 5,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#FFD700"
              }}
            >
              +
            </button>
            <br />
            <br />
            <Button
              style={{ width: 200, height: 60, backgroundColor: "#9ACD32" }}
            >
              Beli Makanan
            </Button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://cdn.idntimes.com/content-images/community/2018/05/05-mcdonalds-friesw710h4732x-3ce1088c707eb442925ad342e56bdb36_600x400.jpg"
            />
            <br />
            <br />
            <button
              style={{
                width: 40,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white"
              }}
            >
              -
            </button>
            <button
              style={{
                marginLeft: 5,
                width: 40,
                borderRadius: 5,
                backgroundColor: "#FFD700"
              }}
            >
              +
            </button>
            <br />
            <br />
            <Button
              style={{ width: 200, height: 60, backgroundColor: "#9ACD32" }}
            >
              Beli Makanan
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
