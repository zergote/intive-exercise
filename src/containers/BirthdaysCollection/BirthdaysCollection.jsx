import React, { Component } from 'react';
import { getCountriesRequesting } from '../../actions/personalDataFormActions';
import {
  getDerivateDataRequesting,
  disableNotification
} from '../../actions/notificationActions';
import { addAPerson } from '../../actions/tableActions';
import { connect } from 'react-redux';
import Notification from '../../components/Notification';
import PersonalDataForm from '../../components/PersonalDataForm';
import Table from '../../components/Table';
import './style.scss';

class BirthdaysCollection extends Component {
  componentDidMount() {
    this.props.getCountriesRequesting();
  }

  render() {
    const { countries, notificationState, currentPerson, persons } = this.props;
    return (
      <div className="base-container-div">
        <div className="title-container">
          <div className="title">Intive - FDV Exercise </div>
        </div>
        <div className="main-data-container">
          <div className="left-container">
            <PersonalDataForm
              options={countries}
              getDerivateDataRequesting={this.props.getDerivateDataRequesting}
              addAPerson={this.props.addAPerson}
            />
            <Notification
              notificationState={notificationState}
              currentPerson={currentPerson}
              disableNotification={this.props.disableNotification}
            />
          </div>
          <div className="right-container">
            <Table
              persons={persons}
              getDerivateDataRequesting={this.props.getDerivateDataRequesting}
            />
            <div className="autor">Christian Yánez</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.personalDataFormReducer.countries,
    notificationState: state.notificationReducer.notificationState,
    currentPerson: state.notificationReducer.currentPerson,
    persons: state.tableReducer.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountriesRequesting: () => {
      dispatch(getCountriesRequesting());
    },
    getDerivateDataRequesting: values => {
      dispatch(getDerivateDataRequesting(values));
    },
    disableNotification: () => {
      dispatch(disableNotification());
    },
    addAPerson: value => {
      dispatch(addAPerson(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdaysCollection);
