import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';
/* eslint-disable */

let Notification = ({ name, country, birthday }) => {
  let day = moment(birthday, 'MM/DD/YYYY').format('D');
  let month = moment(birthday, 'MM/DD/YYYY').format('MMMM');
  let years =
    Number.parseInt(moment().format('YYYY')) -
    Number.parseInt(moment(birthday, 'MM/DD/YYYY').format('YYYY'));
  return (
    <div className="notification-container">
      Hello {name} from {country} on {day} of {month} you will have {years}
    </div>
  );
};

export default Notification;
