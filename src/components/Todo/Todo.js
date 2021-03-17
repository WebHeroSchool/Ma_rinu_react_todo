import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from'./Todo.module.css';

const Todo = () => {
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    filter: 'all'
  };

  const [items,setItems] = useState(initialState.items);
  const [count,setCount] = useState(initialState.count);
  const [filter, setFilter] = useState(initialState.filter);
	let itemsFilter;


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  });

  const itemActive = (items.filter((item) => item.isDone === true)).length;
  const itemDone = (items.filter((item) => item.isDone === false)).length;

    const onClickDone = id => {
      const newItemList = items.map(item => {
        const newItem = { ...item };

          if (item.id === id) {
            newItem.isDone = !item.isDone
          }
        return newItem;
  });
  setItems(newItemList);
};

const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);

    setItems(newItemList);
    setCount(count => count - 1);
  };

  const onClickAdd = value => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
      ];
   setItems(newItems);
   setCount(count => count + 1);
  };

  const onClickFilter = filtered => setFilter(filtered);
  	switch (filter) {
  			case 'done':
  					itemsFilter = items.filter(item => !item.isDone);
  					break;
  			case 'active':
  					itemsFilter = items.filter(item => item.isDone);
  					break;
  			default:
  					itemsFilter = items;
  	}

return (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <InputItem onClickAdd={onClickAdd} />
    <ItemList
      items={items}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      items={itemsFilter}
    />
    <Footer count={items.filter(item => !item.isDone).length}
      filtered={filter}
      itemActive={itemActive}
      itemDone={itemDone}
      onClickFilter={onClickFilter}
     />
  </div>);
 };

export default Todo;
