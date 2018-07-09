import React, { Component } from 'react';
import Notification from '../../components/Notification';
import PersonalDataForm from '../../components/PersonalDataForm';
import Table from '../../components/Table';
import moment from 'moment';
import './style.scss';

class BirthdaysCollection extends Component {
  validDate(date) {
    return moment(date, 'MM/DD/YYYY', true).isValid();
  }

  render() {
    return (
      <div className="base-container-div">
        <div className="title-container">
          <div className="title">Intive - FDV Exercise </div>
        </div>
        <div className="main-data-container">
          <div className="left-container">
            <PersonalDataForm value />
            <Notification
              name="Christian"
              surname="Yánez"
              country="Venezuela"
              birthday="03/13/1987"
            />
          </div>
          <div className="right-container">
            <Table />
            <div className="autor">Christian Yánez</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdaysCollection;
