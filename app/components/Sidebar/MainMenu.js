import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from './sidebar-jss';
import FormControl from '@material-ui/core/FormControl';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

import { selectAction } from '../../redux/actions/sideActions'
import {getFacilities} from './client.js';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

// eslint-disable-next-line
function MainMenu(props) {
  const {
    classes,
    openSubMenu,
    open,
    dataMenu,
    toggleDrawerOpen,
    loadTransition
  } = props;

  const [facilityState, setFacilityState] = useState({
    value: '2',
    name: '',
    Id: '3fc33045-21e6-494d-bc96-967ae26741b5',

  });

  const [facilitydataState, setFacilitydataState] = useState({
    data: []
  });

  const selectDispatch = useDispatch();

  const handleClick = () => {
    toggleDrawerOpen();
    loadTransition(false);
   // window.location.href = 'http://localhost:3001/app/6807bae8-c51e-4343-bfef-31791a9f5488/create-activity';
  };

  const handleSelect = (value) => { 
    selectDispatch(selectAction(value))
  }

  useEffect(() => {
    const init = async () => {
   
    const dat = await getFacilities();
    let tempState = { ...facilityState }
    tempState.data = dat;
    setFacilityState(tempState);  
    }
    init(); 
  }, []);


  const getMenus = menuArray => menuArray.map((item, index) => {
    const handleChange = event => {
      setFacilityState({
        ...facilityState,
        [event.target.name]: event.target.value
      }); 
      handleSelect(event.target.value);    
      const url = window.location.href;
      const prefix=url.split("app/")[0];
      const suburl = url.split("app/")[1];
      const subfix = suburl.split("/")[1];
      const facility_id =  event.target.value;
      window.location.href = prefix + 'app/' + facility_id + "/" + subfix;
    };

    if (item.child || item.linkFacility) {

      const posts = useSelector((state) => state.facilityState);

      let find_ind = item.linkFacility.indexOf("{facilityId}");
      let subfix =   item.linkFacility.substring(find_ind).replace("{facilityId}", "");
   
      return (
        <div key={index.toString()}>
          <ListItem
            button
            component={LinkBtn}
            to={item.linkFacility ? '/app/'+ facilityState.Id + subfix: '#'}
            className={
              classNames(
                classes.head,
                item.icon ? classes.iconed : '',
                open.indexOf(item.key) > -1 ? classes.opened : '',
              )
            }
            onClick={() => openSubMenu(item.key, item.keyParent)}
          >
            {item.icon && (
              <ListItemIcon className={classes.icon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
            )}
            <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
            {!item.linkFacility && (
              <span>
                { open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore />}
              </span>
            )}
          </ListItem>
          { !item.linkFacility && (
            <Collapse
              component="div"
              className={classNames(
                classes.nolist,
                (item.keyParent ? classes.child : ''),
              )}
              in={open.indexOf(item.key) > -1}
              timeout="auto"
              unmountOnExit
            >
              <List className={classes.dense} component="nav" dense>
                {getMenus(item.child, 'key')}
              </List>
            </Collapse>
          )}
        </div>
      );
    }

    if (item.child || item.linkParent) {
      return (
        <div key={index.toString()}>
          <ListItem
            button
            component={LinkBtn}
            to={item.linkParent ? item.linkParent : '#'}
            className={
              classNames(
                classes.head,
                item.icon ? classes.iconed : '',
                open.indexOf(item.key) > -1 ? classes.opened : '',
              )
            }
            onClick={() => openSubMenu(item.key, item.keyParent)}
          >
            {item.icon && (
              <ListItemIcon className={classes.icon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
            )}
            <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
            {!item.linkParent && (
              <span>
                { open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore />}
              </span>
            )}
          </ListItem>
          { !item.linkParent && (
            <Collapse
              component="div"
              className={classNames(
                classes.nolist,
                (item.keyParent ? classes.child : ''),
              )}
              in={open.indexOf(item.key) > -1}
              timeout="auto"
              unmountOnExit
            >
              <List className={classes.dense} component="nav" dense>
                {getMenus(item.child, 'key')}
              </List>
            </Collapse>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
    
      <div key={index.toString()}>
        <ListItem >
              <ListItemIcon className={classes.icon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
          <ListItemText  classes={{ primary: classes.primary }} primary={item.name} />
        </ListItem>
        <Divider />

      </div>
      );
    }
    if (item.select) {
      return (
        <div>
        <ListItem
           >
          <ListItemIcon>
          </ListItemIcon>

          <Select
            value={facilityState.Id}
            onChange={handleChange}
            inputProps={{
              name: 'Id'
            }}
            style={{ width:"10rem", height:"2rem" }}
          >          
            <MenuItem value="3fc33045-21e6-494d-bc96-967ae26741b5">Fredericia Tennisklub</MenuItem>
            <MenuItem value="6807bae8-c51e-4343-bfef-31791a9f5488">Hermes Hallen</MenuItem>
            {facilitydataState.data.map((fd, index) => {
              return (
                <MenuItem key={index} value={fd.Id}>{fd.name}</MenuItem>
              )
            })}
          </Select>
       
          </ListItem>
        </div>
      )
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact
        className={classes.nested}
        activeClassName={classes.active}
        component={LinkBtn}
        to={item.link}
        onClick={() => handleClick()}
      >
        <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
        {item.badge && (
          <Chip color="primary" label={item.badge} className={classes.badge} />
        )}
      </ListItem>
    );
  });

  return (
    <div>
      {getMenus(dataMenu)}
    </div>
  ); 
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.object.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  dataMenu: PropTypes.array.isRequired,
};

const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });
const reducer = 'ui';

const mapStateToProps = state => ({
  force: state, // force active class for sidebar menu
  open: state.getIn([reducer, 'subMenuOpen'])
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

const MainMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default withStyles(styles)(MainMenuMapped);

