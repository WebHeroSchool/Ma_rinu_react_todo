import React from 'react';
import Item from '../Item/Item';
import styles from'./ItemList.module.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, onClickDone }) => (
  <div className={styles.list}>
    <List>
      {items.map(item => (
        <ListItem classname={styles.item} key={item.value}>
          <Checkbox
            name="checkedB"
            color="primary"
            onClick={() => onClickDone(item.isDone)}
           />
            <ListItemText><Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} /></ListItemText>
            <ListItemSecondaryAction className={styles.delete}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      ))}
    </List>
</div>);

export default ItemList;


// const ItemList = ({ items }) => (<ul>
//   {items.map(item => <li key={item.value}>
//     <Item value={item.value} isDone={item.isDone} /></li>)}
// </ul>);
// <IconButton aria-label="Comments" >
//             <DeleteForeverRoundedIcon />
// </IconButton>
