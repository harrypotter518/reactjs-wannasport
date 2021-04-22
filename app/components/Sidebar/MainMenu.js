import React, {useState} from 'react';
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

import selectAction from '../../redux/actions/sideActions'

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

  const [dataState, setDataState] = useState({
    age: '',
    name: 'hai'
  });

  const selectDispatch = useDispatch();

  const handleClick = () => {
    toggleDrawerOpen();
    loadTransition(false);
  };

  const handleSelect = (event) => { 
    selectDispatch(selectAction(event.target.value));
  }


  const getMenus = menuArray => menuArray.map((item, index) => {
    const handleChange = event => {
      setDataState({
        ...dataState,
        [event.target.name]: event.target.value
      });
    };

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
        // <div>
        //   <FormControl className={classes.title}>
        //     <InputLabel htmlFor="selection">Selection</InputLabel>
        //     <Field
        //       required
        //       name="selection"
        //       component={SelectRedux}
        //       placeholder="Selection"
        //       autoWidth={trueBool}
        //     >
        //       <MenuItem value="option1">Option One</MenuItem>
        //       <MenuItem value="option2">Option Two</MenuItem>
        //       <MenuItem value="option3">Option Three</MenuItem>
        //     </Field>
        //   </FormControl>
        // </div>
        
        <div>
        <ListItem
           >
          <ListItemIcon>
          </ListItemIcon>
          {/* <InputLabel htmlFor="age-simple">Age</InputLabel> */}
          <Select
            value={dataState.age}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            style={{ width:"100px" }}
          >          
            <MenuItem value={1}>Facility1</MenuItem>
            <MenuItem value={2}>Facility2</MenuItem>
            <MenuItem value={3}>Facility3</MenuItem>
          </Select>
       
          </ListItem>
        </div>

      //   <FormControl className={classes.formControl}>
      //     <InputLabel htmlFor="age-simple">Age</InputLabel>
      //     <Select
      //       value={dataState.age}
      //       onChange={handleChange}
      //       inputProps={{
      //         name: 'age',
      //         id: 'age-simple',
      //       }}
      //       style={{ width:"10vw" }}
      //     >          
      //       <MenuItem value={10}>Ten</MenuItem>
      //       <MenuItem value={20}>Twenty</MenuItem>
      //       <MenuItem value={30}>Thirty</MenuItem>
      //     </Select>
      // </FormControl>

        // <div key={index.toString()}>
        //   <select onChange={handleSelect}>  
        //     {
        //       item.option.map((option, index) => {
        //         return (
        //           <option value={option}>{option}</option>
        //         )
        //       })
        //     }          
        //   </select>  
        // </div> 
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
