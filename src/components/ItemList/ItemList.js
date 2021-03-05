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

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <div className={styles.list}>
    <List>
      {items.map(item => (
        <ListItem classname={styles.item} key={item.value}>
          <Checkbox
            checked={item.isDone}
            name="checkedB"
            color="primary"
            onClick={() => onClickDone(item.id)}
           />
            <ListItemText><Item
              value={item.value}
              isDone={item.isDone}
              id={item.id}
              onClickDone={onClickDone}
            />
            </ListItemText>
            <ListItemSecondaryAction className={styles.delete}>
              <IconButton
                aria-label="delete"
                onClick = {() => onClickDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      ))}
    </List>
</div>);

export default ItemList;
