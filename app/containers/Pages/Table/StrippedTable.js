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
      name: 'activity_id',
      options: {
        display: false,
      }
    },
    {
      name: 'Activity Title',
      options: {
        filter: true,
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
                value={value}
                onChange={cancelOpen}
                inputProps={{
                  name: 'Id'
                }}
                style={{ width:"10rem", height:"2.5rem" }}
              >    
                <MenuItem value="0"> <em>None</em></MenuItem>
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
      const data_list = await getActivities(facility_id,'name');
      var k=0;
      let data=[];
      for (var i =0; i<data_list.length;i++)
      {        
        if (typeof data_list[i]['name'] != 'undefined' || typeof data_list[i]['title'] != 'undefined')
        {
          data[k] =[];
          data[k].push(data_list[i]['id']);
          if (typeof data_list[i]['name'] != 'undefined')
              data[k].push(data_list[i]['name']);
          else if (typeof data_list[i]['title'] != 'undefined')
              data[k].push(data_list[i]['title']);
          if (typeof data_list[i]['startTime'] != 'undefined')
              data[k].push(data_list[i]['date']+" "+ data_list[i]['startTime']+"~"+data_list[i]['endTime']);
          else if(typeof data_list[i]['duration'] != 'undefined')
          {
            let st_time_h =  data_list[i]['time'].split(":")[0];
            let st_time_m =  data_list[i]['time'].split(":")[1];
      
            let end_time_m =  (parseInt(st_time_m) + parseInt(data_list[i]['duration']))%60;
            let end_time_h =  (parseInt(st_time_h) + Math.trunc((parseInt(st_time_m) + parseInt(data_list[i]['duration']))/60.0) ) %24;
            if (end_time_h <10) end_time_h = "0" +end_time_h;
            if (end_time_m <10) end_time_m = "0" +end_time_m;
            data[k].push(data_list[i]['date']+" "+ data_list[i]['time']+"~"+end_time_h+":"+ end_time_m);
          }  
          if(typeof data_list[i]['participants'] != 'undefined')
              data[k].push("Deltagere "+data_list[i]['participants']+"/"+ data_list[i]['maxParticipants']);
          else if(typeof data_list[i]['participants'] == 'undefined')
              data[k].push("Deltagere 0/20");
          // if(data_list[i]['canCancel'] == true)
          //     data[k].push(0);
          if(data_list[i]['canCancel'] == false)
              data[k].push(1);
          k++;
        }       

      }
      setDataState({...dataState, data:data});
    }
    init();
  }, []);

  const default_data = [];

  
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
  const [dataState, setDataState] = useState({
    data: default_data,
  })
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
    ...rowdataState, data:[], message:''
  });
  const cancelOpen = (e) => {
    if (e.target.value == 1) 
     setModalState({ ...modalState, open: true });
  }
  const cancelClose = () => {
    setModalState({ ...modalState, open: false })
  }
  
  const cancelClick = async() => {
    setProgressState({...progressState, open:true});
    setModalState({ ...modalState, open: false });  
    var sdata = rowdataState.data;
    const act_id = sdata[0];
    const message =  rowdataState.message;
    await  cancelActivity(act_id, message);

    setCompleteState({ ...completeState, open: true });
    setProgressState({...progressState, open:false});
  };
  
  const completeClose = async() => {
    setCompleteState({ ...completeState, open: false });
  }

  const onChangeDescription = (e) => {
    setRowdataState({...rowdataState, message: e.target.value});
  }

  return (
    <div>
      <div className={classes.table}>
        <MUIDataTable
          title="Activity list"
          data={dataState.data}
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
                  {rowdataState.data[1]}
                </Typography>
                <Typography component="p">
                  {rowdataState.data[2]}
                </Typography>
                <hr/>
                
                <FormLabel component="label"><h4 >Number Of Participants:0</h4></FormLabel>
                <br/>
                
                <Typography variant="h5" component="h5">
                  Message til Participants
                </Typography>

                <div style={{marginTop:'1rem' }}>
                  <FormLabel component="label" ><h5>Messages will be sent to all participants who signed up for activity</h5></FormLabel>
                  <Input
                  placeholder="Type something"
                  // className={classes.input}
                  // inputProps={{
                  //   'aria-label': 'Description',
                  // }}
                  style={{ width:'100%' }}
                  value={rowdataState.message} 
                  onChange={onChangeDescription}
                  type = "text"
                  multiline={true}
                  rows={4}    
                />
              </div>

              <div style={{marginTop:'1rem' }}>
                <FormLabel component="label"  ><h5>Confirm</h5></FormLabel>   
                <Input
                placeholder='Write "confirm" to cancel activity'
                // className={classes.input}
                // inputProps={{
                //   'aria-label': 'Description',
                // }}
                style={{ width:'100%' }}
                // value={state.name} 
                //  onChange={onChangeConfirm}
                type = "text" 
                />
              </div>
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
