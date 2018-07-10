import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';
/* eslint-disable */

let Notification = props => {
  const { notificationState, currentPerson, disableNotification } = props;
  let day = moment(currentPerson.birthday, 'MM/DD/YYYY').format('D');
  let month = moment(currentPerson.birthday, 'MM/DD/YYYY').format('MMMM');
  let years =
    Number.parseInt(moment().format('YYYY')) -
    Number.parseInt(
      moment(currentPerson.birthday, 'MM/DD/YYYY').format('YYYY')
    );
  setTimeout(() => {
    disableNotification()
  }, 3000);
  return (
    <div>
      {notificationState ? (
        <div className="notification-container">
          Hello {currentPerson.name} from {currentPerson.country} on {day} of{' '}
          {month} you will have {years}
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
