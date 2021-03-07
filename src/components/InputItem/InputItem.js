import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from'./InputItem.module.css';
import PropTypes from 'prop-types';


class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue)
  }

  render () {
    const { onClickAdd } = this.props;

    return (<div className={styles.input}>
      <TextField
        className={styles.text}
        id="outlined-search"
        label="Добавить новую задачу"
        type="search"
        variant="outlined"
        fullWidth
        size="small"
        value={this.state.inputValue}
        onChange={event => this.setState({inputValue: event.target.value})}
      />
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          if (this.state.inputValue !== '') { this.onButtonClick();
          } else { alert('Ошибка: введите задачу'); }
        }}
      >
        Добавить
    </Button>
    </div>);
  }
}

InputItem.propTypes = {
  inputValue: PropTypes.string,
  onClickAdd: PropTypes.func,
  onButtonClick: PropTypes.func
};

export default InputItem;
