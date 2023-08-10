import React from 'react';    
import { makeStyles } from '@material-ui/core/styles';    
import FormControl from '@material-ui/core/FormControl';    
import InputLabel from '@material-ui/core/InputLabel';    
import Select from '@material-ui/core/Select';    
import MenuItem from '@material-ui/core/MenuItem';    
    
const useStyles = makeStyles((theme) => ({    
  formControl: {    
    margin: theme.spacing(1),    
    minWidth: 120,    
  },    
}));    
    
const options = ['Year', 'Budget', 'Score', 'Votes', 'Runtime', 'Genre'];    
const options2 = ['line', 'bar', ];    
    
export default function DropdownSelect({ onOption1Change, onOption2Change }) {    
  const classes = useStyles();    
  const [selectedOption1, setSelectedOption1] = React.useState('Year');    
  const [selectedOption2, setSelectedOption2] = React.useState('line');    
    
  const handleChange1 = (event) => {    
    const value = event.target.value;    
    if (value !== selectedOption1) {    
      setSelectedOption1(value);    
      onOption1Change(value); // 调用回调函数，将选择的值传递给父组件    
    }    
  };    
    
  const handleChange2 = (event) => {    
    const value = event.target.value;    
    if (value !== selectedOption2) {    
      setSelectedOption2(value);    
      onOption2Change(value); // 调用回调函数，将选择的值传递给父组件    
    }    
  };    
    
  return (    
    <div>    
      <FormControl className={classes.formControl} style={{ marginTop: '10%', marginLeft: '25%' }}>    
        <InputLabel id="demo-simple-select-label">选择x轴</InputLabel>    
        <Select    
          labelId="demo-simple-select-label"    
          id="demo-simple-select"    
          value={selectedOption1}    
          onChange={handleChange1}    
        >    
          {options.map((option, index) => (    
            <MenuItem key={index} value={option}>    
              {option}    
            </MenuItem>    
          ))}    
        </Select>    
      </FormControl>    
    
      <FormControl className={classes.formControl} style={{ marginLeft: '25%' }}>    
        <InputLabel id="demo-simple-select-label2">选择图线类型</InputLabel>    
        <Select    
          labelId="demo-simple-select-label2"    
          id="demo-simple-select2"    
          value={selectedOption2}    
          onChange={handleChange2}    
        >    
          {options2.map((option2, index) => (    
            <MenuItem key={index} value={option2}>    
              {option2}    
            </MenuItem>    
          ))}    
        </Select>    
      </FormControl>    
    </div>    
  );    
}  