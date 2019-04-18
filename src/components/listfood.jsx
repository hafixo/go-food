import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
              +
            </button>
            <button style={{ marginLeft: 5, width: 40, borderRadius: 5 }}>
              -
            </button>
            <br />
            <br />
            <button>Beli Makanan</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://awsimages.detik.net.id/community/media/visual/2018/04/13/69e9d99d-3bda-4521-8514-c49e5302ad40.jpeg?a=1"
            />
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <br />
            <br />
            <button>Beli Makanan</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg"
            />
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <br />
            <br />
            <button>Beli Makanan</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://www.kfc.com.au/sites/default/files/WEBSITE_CATERING_768x432px_V2.jpg"
            />
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <br />
            <br />
            <button>Beli Makanan</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/donat-kentang-50321491.jpg"
            />
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <br />
            <br />
            <button>Beli Makanan</button>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22, marginTop: 20 }}>
          <Paper className={classes.paper}>
            <img
              style={{ width: 400, height: 200 }}
              src="https://www.wantedinrome.com/i/preview/storage/uploads/2019/01/starbucks-vatican-rome.jpg"
            />
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <br />
            <br />
            <button>Beli Makanan</button>
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
