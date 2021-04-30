import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
    <div className={classes.table}>
      <MUIDataTable
        title="Activity list"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
