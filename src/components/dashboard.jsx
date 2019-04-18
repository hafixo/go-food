import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://img.okezone.com/content/2016/05/02/320/1378067/usai-grabmotor-grab-rambah-jasa-antar-makanan-n0jF8ahgDo.jpg"
            />
            <br />
            <br />
            <Link to="/dashresto">
              <button
                style={{
                  height: 50,
                  color: "#000080",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#FFD700"
                }}
              >
                pilih layanan
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://klgadgetguy.com/wp-content/uploads/2018/12/IMAGE-GrabFood-Satisfy-All-Your-Cravings-From-Local-Favourites-to-Chicken-McNuggets.jpg"
            />
            <br />
            <br />
            <Link to="/dashresto">
              <button
                style={{
                  height: 50,
                  color: "#000080",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#FFD700"
                }}
              >
                pilih layanan
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://media.skyegrid.id/wp-content/uploads/2019/02/2-1600x800.jpg"
            />
            <br />
            <br />
            <Link to="/dashresto">
              <button
                style={{
                  height: 50,
                  color: "#000080",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#FFD700"
                }}
              >
                pilih layanan
              </button>
            </Link>
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
