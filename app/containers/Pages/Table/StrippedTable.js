import React, { Component, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
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
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import {
  TextFieldRedux,
  SelectRedux,
  CheckboxRedux,
  SwitchRedux
} from 'enl-components/Forms/ReduxFormMUI';
import {cancelActivity, getActivities} from '../client.js';
import { CompareArrowsOutlined } from '@material-ui/icons';

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
          <FormControl className={classes.formControl}  style={{marginTop:"-1.5rem" }}>
            <InputLabel htmlFor="age-simple">More Options</InputLabel>
              <Select
                // value={1}
                onChange={cancelOpen}
                inputProps={{
                  name: 'Id'
                }}
                style={{ width:"10rem", height:"2.5rem" }}
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

  useEffect(() => {
    const init = async () => {
      const url = window.location.href;
      const suburl = url.split("app/")[1];
      const facility_id = suburl.split("/")[0];
      console.log(facility_id);
      const data_list = await getActivities(facility_id,'name');
      console.log(data_list);
      //debugger;
      for (var i =0; i<data_list.length;i++)
        console.log("i===="+data_list[i]);

     
    }
    init();
  }, []);

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
    page: 0,
    viewColumns: true,
    selectableRows: 'none',
    onRowClick: (rowData, rowState) => {
      setRowindexState({
        ...rowindexState, dataIndex:rowState.dataIndex, rowIndex:rowState.rowIndex
      });
      setRowdataState({
        ...rowdataState, data:rowData
      });
      
      console.log(rowData, rowState);
    },
  };
  // validation functions
  const required = value => (value == null ? 'Required' : undefined);

  const { classes } = props;
  // const [cancelState, setCancelState] = useState();
  const [modalState, setModalState] = useState({
    open: false,
  })
  const [progressState, setProgressState] = useState({
    open: false,
  })
  const [completeState, setCompleteState] = useState({
    open: false,
  })
  
  const [rowindexState, setRowindexState] = useState({
    rowIndex:0, dataIndex:0
  })
  const [rowdataState, setRowdataState]= useState({
    ...rowdataState, data:[]
  });
  const cancelOpen = () => {
    setModalState({ ...modalState, open: true })
  }
  const cancelClose = () => {
    setModalState({ ...modalState, open: false })
  }
  
  const cancelClick = async() => {
    setProgressState({...progressState, open:true});
    setModalState({ ...modalState, open: false });  
    // const formData= {
    //   title: 'activity title',
    //   sport: 1,
    //   date: '2020-04-20',
    //   time: '18:00',
    //   duration: 60,
    //   description: 'this is an activity description',
    //   facilityId: '6807bae8-c51e-4343-bfef-31791a9f5488'
    //   };
    // const act_id = 'ef995215-5377-4e38-842a-0e2933bc54fb';
    // const message =  'this is a message to all participants';
    // await  cancelActivity(act_id, message);
  
    const facilityId = '6807bae8-c51e-4343-bfef-31791a9f5488'; 
    const sorting = "date";
    const re = await getActivities(facilityId, sorting);
    console.log(re);
    setCompleteState({ ...completeState, open: true });
    setProgressState({...progressState, open:false});
  };
  
  const completeClose = async() => {
    setCompleteState({ ...completeState, open: false });
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
              height: "40rem", width: "36rem"
            }}
          >                  
            <Grid
              item
              xs={10}
              md={12}
              className={classes.demo}              
            >       
              <Typography variant="h4" component="h3">
                Football Match
              </Typography>
              <Typography component="p">
                2021/04/30 19:00~20:00
              </Typography>
              <hr/>
              
              <FormLabel component="label"><h4 >Number Of Participants:8</h4></FormLabel>
              <br/>
              
              <Typography variant="h5" component="h5">
                Message til Participants
              </Typography>
        
              <FormLabel component="label" style={{ paddingTop:'1rem' }}><h5>Messages will be sent to all participants who signed up for activity</h5></FormLabel>
              <Input
              placeholder="Type something"
              // className={classes.input}
              // inputProps={{
              //   'aria-label': 'Description',
              // }}
              style={{ width:'100%' }}
              // value={state.name} 
              // onChange={onChangeName}
              type = "text"
              multiline={true}
              rows={4}    
            />
              
              {/* <Field
                name="textarea"
                className={classes.field}
                component={TextFieldRedux}
                placeholder="Type something"
                label="Description"
                multiline={true}
                rows={4}
              /> */}
              
              <FormLabel component="label"  style={{marginTop:'2rem' }}><h5>Confirm</h5></FormLabel>
              {/* <Field
                name="text"
                component={TextFieldRedux}
                placeholder="Name of Activity"
                label="Text Field"
                validate={required}
                required
                className={classes.field}
              /> */}
              <Input
              placeholder='Write "confirm" to cancel activity'
              // className={classes.input}
              // inputProps={{
              //   'aria-label': 'Description',
              // }}
              style={{ width:'100%' }}
              // value={state.name} 
              // onChange={onChangeName}
              type = "text" 
            />
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
