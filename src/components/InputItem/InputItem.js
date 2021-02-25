import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styles from'./InputItem.module.css';


const InputItem = () => (<div>
  <TextField
    id="outlined-search"
    label="Добавить новую задачу"
    type="search"
    variant="outlined"
    fullWidth
    size="small"
  />
</div>);

export default InputItem;
