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
              src="https://2.bp.blogspot.com/-gHsnttJuCu8/WCJq7JdlsVI/AAAAAAAAJ_E/OfYkzGXbtRI6oKs7EA9LaG0XcdmAZP4BACLcB/s1600/bitebrands-daftar-nama-perusahaan-makanan-cepat-saji-restoran-fast-food-dunia-terkenal02.jpg"
            />
            <br />
            <br />
            <Link to="/dashfood">
              <button className={classes.root}>pilih restaurant</button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="http://turistite.com/wp-content/uploads/2018/09/creative-starbucks-exterior-paint-colors-in-starbucks-opens-first-store-in-ferguson-in-low-in-e-munity-of-starbucks-exterior-paint-colors.jpg"
            />
            <br />
            <br />
            <button>pilih restaurant</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://moneyinc.com/wp-content/uploads/2019/01/Pizza-Hut_1.jpg"
            />
            <br />
            <br />
            <button>pilih restaurant</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://gastronomyaficionado.files.wordpress.com/2017/11/indonesia-richeese-factory-8.jpg?w=672&h=372&crop=1"
            />
            <br />
            <br />
            <button>pilih restaurant</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="http://media.bizj.us/view/img/1426141/cornerbakery*500.jpg"
            />
            <br />
            <br />
            <button>pilih restaurant</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://eatatfish.com/wp-content/uploads/2017/10/FISH-restaurant-exterior.jpg"
            />
            <br />
            <br />
            <button>pilih restaurant</button>
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
