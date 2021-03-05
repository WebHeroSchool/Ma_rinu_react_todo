import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

const todoItem = 'Написать новое приложение';

class App extends React.Component {
  state = {
    items: [
      {
          value: 'Написать новое приложение',
          isDone: true,
          id: 1
      },
      {
          value: 'Прописать props',
          isDone: false,
          id: 2
       },
      {
          value: 'Сделать все дела',
          isDone: true,
          id: 3
      }
    ]
  };

onClickDone = id => {
  const newItemList = this.state.items.map(item => {
    const newItem = { ...item };

    if (item.id === id) {
      newItem.isDone = !item.isDone
    }
    return newItem;
  });
  this.setState({ items: newItemList });
};

onClickDelete = id => {
    const newItemList = this.state.items.filter(item => {
      const newItem = { ...item };

      if (item.id !==id) {
        return newItem;
      }
    });

    this.setState({ items: newItemList });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem />
        <ItemList
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer count={3} />
      </div>);
  }
};

export default App;
