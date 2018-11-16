import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});


class Board extends Component {

	render(){

		const { classes } = this.props

		return (
			<MuiThemeProvider>
			<Grid container spacing={8}>
		        <Grid alignItems="center" item xs={4} sm={4} md={4} lg={4}>
		            <Paper className={classes.paper}>
		            	<p>
		                 Card Title
		                </p>
		            </Paper>
		        </Grid>
		       	<Grid item xs={4} sm={4} md={4} lg={4}>
		            <Paper>
		            	<p>
		                 Card Title
		                </p>
		            </Paper>
		        </Grid>
		        <Grid item xs={4} sm={4} md={4} lg={4}>
		            <Paper>
		            	<p>
		                 Card Title
		                </p>
		            </Paper>
		        </Grid>
	       	</Grid>
	       	</MuiThemeProvider>
		);
	}
}

Board.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Board);
