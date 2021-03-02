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
          isDone: true
      },
      {
          value: 'Прописать props',
          isDone: false
       },
      {
          value: 'Сделать все дела',
          isDone: true
      }
    ]
  };

onClickDone = isDone => console.log(isDone);

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={3} />
      </div>);
  }
};

export default App;
