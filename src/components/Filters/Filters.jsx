import React from 'react';
import css from "./Filters.module.css"
export default class Filters extends React.Component {
  state = {
    filter: '',
  };

  handleInputChange = e => {
    const value = e.target.value;

    this.setState({ [e.target.name]: value });

    this.props.handleFilterContact(value);
  };

  render() {
    return (
      <input 
      className={css.input}
        type="text"
        name="filter"
        value={this.state.filter}
        onChange={this.handleInputChange}
        placeholder='Поиск по имени'
      />
    );
  }
}
