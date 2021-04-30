import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';

import {getCategories, createActivity} from '../client.js';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function AdvFilter(props) {
  const columns = [
    {
      name: 'Activity Title',
      options: {
        filter: true
      }
    },
    {
      name: 'Date&Time',
      options: {
        filter: true,
      }
    },
    {
      name: 'Number of Participants',
      options: {
        filter: true,
        customBodyRender: (value) => {
          return (<Chip label={value} color="secondary" style={{ width:"10rem", height:"2rem" }}/>);
        }
      }
    },
    {
      name: 'Action',
      options: {
        filter: true,
        customBodyRender: (value) => {
       

          return (
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">More Options</InputLabel>
              <Select
                // value={1}
                // onChange={handleChange}
                inputProps={{
                  name: 'Id'
                }}
                style={{ width:"10rem", height:"3rem" }}
              >    
                <MenuItem value=""> <em>None</em></MenuItem>
                <MenuItem value="1">Cancel Activity</MenuItem>
              </Select>
            </FormControl>
            );
        }
      }
    },
   
  ];

  const data = [
    ['Football intro', '19/05/2020 19:00~21:00','Deltagere 3/30'],
    ['Badminton intro', '19/04/2021 19:00~21:00', 'Deltagere 3/30'],
    ['Footbal match', '19/02/2020 14:00~16:00', 'Deltagere 3/30'],
    ['Volleyball Train', '13/05/2020 13:00~15:00', 'Deltagere 3/30'],
    ['Footbal match', '19/02/2020 14:00~16:00', 'Deltagere 3/30'],
    ['Volleyball Train', '13/05/2020 13:00~15:00', 'Deltagere 3/30']
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

  const { classes } = props;
  // const [cancelState, setCancelState] = useState();


  const cancelOpen = () => {
    
    setCancelState({ ...cnacelState, open: true });
    
  }
  const cnacelClose = () => {
    setCancelState({ ...cancelState, open: false })
  }
  return (
    <div>
      <div className={classes.table}>
        <MUIDataTable
          title="Activity list"
          data={data}
          columns={columns}
          options={options}
        />
      </div>

      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
      <div>
        <Dialog
          open={modalState.open}
          onClose={cancelClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">{'Add Supplier'}</DialogTitle> */}
          <DialogContent
            style={{
              height: "200px", width: "400px"
            }}
          >                  
            <Grid
              item
              xs={10}
              md={12}
              className={classes.demo}    
              style={{ paddingTop:"3rem" }}              
            >
              <FormLabel component="label" style={{ textAlign: "center"}}><h4 >{rowindexState.dataIndex}</h4></FormLabel>
              <FormLabel component="label" style={{ textAlign: "center"}}><h4 ></h4></FormLabel>
              {/* <FormLabel component="label" style={{ textAlign: "center"}}><h4 >row_data[2]</h4></FormLabel>
              <FormLabel component="label" style={{ textAlign: "center"}}><h4 >row_data[3]</h4></FormLabel> */}
        
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelClose} color="primary">
              Back
            </Button>
            <Button onClick={cancelClick} variant="contained" color="primary">
              Cancel Activity
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog
          open={progressState.open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">{'Add Supplier'}</DialogTitle> */}
          <DialogContent
            style={{
              height: "200px", width: "400px"
            }}
          >                  
            <Grid
              item
              xs={10}
              md={12}
              className={classes.demo}    
              style={{ paddingTop:"3rem" }}              
            >
              <FormLabel component="label" style={{ textAlign: "center"}}><h4 >Operating Activity</h4></FormLabel>
              <LinearProgress />
              <br />
              <LinearProgress color="secondary" />
            </Grid>

          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
              Cancel
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog
          open={completeState.open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">{'Add Supplier'}</DialogTitle> */}
          <DialogContent
            style={{
              height: "200px", width: "400px"
            }}
          >                  
            <Grid
              item
              xs={10}
              md={12}
              className={classes.demo}    
              style={{ paddingTop:"3rem" }}              
            >
              <FormLabel component="label" style={{ textAlign: "center"}}><h4 > Activity Cancelled</h4></FormLabel>
              <div style={{ textAlign: "center"}}><Icon >done</Icon></div>
            </Grid>
          </DialogContent>
          <DialogActions>        
            <Button onClick={completeClose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>  
      </Grid>
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
