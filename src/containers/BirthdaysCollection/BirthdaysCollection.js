import React, { Component } from 'react';
import TextInput from '../../components/TextInput/';
import Select from '../../components/Select/';
import moment from 'moment';
import './style.scss';

class BirthdaysCollection extends Component {
  validDate(date) {
    return moment(date, 'MM/DD/YYYY', true).isValid();
  }

  render() {
    console.log(this.validDate('10/02/2018')); // eslint-disable-line
    return (
      <div className="base-container-div">
        <div className="title-container">
          <h3 className="title">Intive - FDV Exercise </h3>
        </div>
        <div className="main-data-container">
          <div className="left-container">
            <label>Name: </label>
            <TextInput name="name here" />
            <br />
            <label>Surname: </label>
            <TextInput name="name here" />
            <br />
            <label>Countries: </label>
            <Select />
            <br />
            <label>Birthday: </label>
            <TextInput name="mm/dd/yyyy" />
          </div>
          <div className="right-container">Right</div>
        </div>
      </div>
    );
  }
}

export default BirthdaysCollection;
