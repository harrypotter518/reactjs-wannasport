import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';

import { DatePicker, TimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';

import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';

import {getCategories, createActivity, getActivities} from './client.js';
const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
};

import useScript from '../hooks/useScript';

import {
  TextFieldRedux,
  SelectRedux,
  CheckboxRedux,
  SwitchRedux
} from 'enl-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'enl-redux/actions/reduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
});

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(50%, 50%)',
  };
}

const initData = {
  text: 'Sample Text',
  email: 'sample@mail.com',
  radio: 'option1',
  selection: 'option2',
  onof: true,
  checkbox: true,
  textarea: 'This is default text'
};

function ReduxFormDemo(props) {

  const trueBool = true;
  const {
    classes,
    pristine,
    reset,
    submitting,
    init,
    clear
  } = props;

  const [dataState, setDataState] = useState({
    sportcategory: [],
    currentSportId: 0
  });
  const [modalState, setModalState] = useState({
    open: false,
  });
  const [completeState, setCompleteState] = useState({
    open: false,
  });

  // const [progressState , setProgressState ] = useState({
  //   completed: 0,
  //   buffer: 10,
  //   isActive: false
  // });

  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // console.log("sadassssssssssssssssssssssssssssssss");
  // const rr =  useScript('https://static.wannasport.dk/misc/client.js');
  // console.log(rr);

  useEffect(() => {
    const init = async () => {
      // const res = await axios.get('https://static.wannasport.dk/misc/client.js');
      const category = await getCategories();

      let tempState = { ...dataState };
      tempState.sportcategory = category;
      setDataState(tempState);

      let timer = null;
      // if (progressState.isActive == true)
      //   timer = setInterval(progress, 500);
      // else
      //   clearInterval(timer);        
    }
    init();
  }, []);

  const handleChange = (e) => {
    setDataState({ ...dataState, currentSportId: e.target.value });
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  // const openModal = () =>{
  //   setModalState({...modalState, open:true})
  // }


  const handleOpen = async() => {

   
    setModalState({ ...modalState, open: true });
    //setProgressState({ ...progressState, isActive: true });
  
     await  createActivity("football match",4,'04/04/2020', '21:00',34,'good is good is goos is good','3fc33045-21e6-494d-bc96-967ae26741b5');
   // await getCategories();


   setCompleteState({ ...completeState, open: true });
   setModalState({ ...modalState, open: false });

  }
  const handleClose = () => {
    setModalState({ ...modalState, open: false })
  }
  const completeClose = async() => {
    let facilityId = "3fc33045-21e6-494d-bc96-967ae26741b5";
    let sorting = 'name';
    let desc = '1';
    setCompleteState({ ...completeState, open: false });
    const rl = await getActivities(facilityId, sorting, desc);
    console.log("d---------------------------------d");
    console.log(rl);
  }
  const overviewClick = () => {
    // <Route path="/app/:facilityId/list-activities" component={Table} />
     setCompleteState({ ...completeState, open: false })
     window.location.href = '/app/:facilityId/list-activities';
  }

  //let  complete =0;
  // const progress = () => {
 
  //   complete  = progressState.completed;
  //   console.log(complete);
  //   if (complete > 100) {
  //     setProgressState({ ...progressState, completed: 100, buffer: 10 });
  //   } else {
  //     const diff = Math.random() * 10;
  //     const diff2 = Math.random() * 10;
  //     setProgressState({ ...progressState, completed: complete + diff, buffer: complete + diff + diff2 });
  //   }
  // };

  return (
    <div>
      {/* <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center"> */}
      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md={6}>
          <Paper className={classes.root}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="row"
          >
            <Grid item xs={12} md={12}>
              <Typography variant="h4" component="h3">
                Create Activity
              </Typography>
              <Typography component="p">
                You are able to create activities on WannaSport, that will be exposed and people can sign up for
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}  style={{ paddingTop:'2rem' }}>
         
              <Typography variant="button" className={classes.divider}>Activity Title</Typography>
              <Field
                name="text"
                component={TextFieldRedux}
                placeholder="Name of Activity"
                label="Text Field"
                validate={required}
                required
                className={classes.field}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="button" className={classes.divider}>Sport</Typography>
              <FormControl className={classes.field}>
                <Select
                  value={dataState.currentSportId}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  {dataState.sportcategory.map((sp, index) => {
                    return (
                      <MenuItem key={sp.Id} value={sp.Id}>{sp.Name}</MenuItem>
                    )
                  })
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} >
              <Typography variant="button" className={classes.divider}>Time</Typography>
            </Grid>     
            <Grid item xs={12} md={12} >            
              <Grid
                  container
                  alignItems="center"
                  justify="space-around"
                  direction="row"
                >
                <Grid item sm ={6} xs={6} md={4} style={{margin:"auto"}}>            
                  <div>
                  <FormControl className={classes.field}>
                      <div className={classes.picker}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <KeyboardDatePicker
                            label="Masked input"
                            format="DD/MM/YYYY"
                            placeholder="10/10/2018"
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            value={selectedDate}
                            onChange={handleDateChange}
                            animateYearScrolling={false}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                      </FormControl>
                      </div>
                </Grid>
                <Grid item sm ={6} xs={6} md={4} style={{margin:"auto", marginTop:'0px'}} >
                  <div>
                    <FormControl className={classes.formControl} >
                      <div className={classes.picker}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <TimePicker
                            label="Masked timepicker"
                            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                            placeholder="08:00 AM"
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton>
                                    <Icon>access_time</Icon>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </FormControl> 
                    </div>
                </Grid>
                <Grid item sm ={12} xs={12} md={4} >
                  <FormControl className={classes.formControl} style={{ width:"100%" }}>
                      <Field
                        name="text"
                        component={TextFieldRedux}
                        type="number"
                        placeholder="60 min"
                        label="Duration"
                        validate={required}
                        required
                        className={classes.field}
                      />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid> 
          
            <Grid item xs={12} md={12}>
            <div className={classes.inlineWrap}>
              <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} />} label="Repeat Activity" />
            </div>
            </Grid>
            <Grid item xs={12} md={12} style={{ paddingTop: "2rem" }}>
            {/* <div className={classes.field} > */}
              <FormLabel component="label"><h5>Description</h5></FormLabel>
              <Field
                name="textarea"
                className={classes.field}
                component={TextFieldRedux}
                placeholder="Type something"
                label="Description"
                multiline={trueBool}
                rows={4}
              />
            </Grid>

            <Grid item xs={12} md={12} style={{ textAlign: 'right' }}>
              <Button onClick={handleOpen} variant="contained" color="primary" disabled={submitting} >
                Continue
              </Button>
            </Grid>

            <div>
              <Dialog
                open={modalState.open}
                onClose={handleClose}
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
                      {/* <LinearProgress variant="buffer" value={progressState.completed} valueBuffer={progressState.buffer} />
                      <br />
                      <LinearProgress color="secondary" variant="buffer" value={progressState.completed} valueBuffer={progressState.buffer} /> */}
                    <LinearProgress />
                    <br />
                    <LinearProgress color="secondary" />
                  </Grid>

                </DialogContent>
                <DialogActions>
                  {/* <Button onClick={handleClick} variant="contained" color="primary" autoFocus>
                      Save
                    </Button> */}
                  <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
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
                    <FormLabel component="label" style={{ textAlign: "center"}}><h4 > Activity Created</h4></FormLabel>
                    <div style={{ textAlign: "center"}}><Icon >done</Icon></div>
                  </Grid>

                </DialogContent>
                <DialogActions>
                  <Button onClick={overviewClick}  color="primary" autoFocus>
                      Go to List
                    </Button>
                  <Button onClick={completeClose} variant="contained" color="primary">
                    Close
                    </Button>
                </DialogActions>
              </Dialog>
            </div>


            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

ReduxFormDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(ReduxFormDemo);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
