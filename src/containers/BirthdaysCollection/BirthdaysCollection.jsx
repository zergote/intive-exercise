import React, { Component } from 'react';
import { getCountriesRequesting } from '../../actions/personalDataFormActions';
import {
  getDerivateDataRequesting,
  disableNotification
} from '../../actions/notificationActions';
import {
  addAPerson,
  savePersonsRequesting,
  loadPersonsRequesting
} from '../../actions/tableActions';
import { connect } from 'react-redux';
import Notification from '../../components/Notification';
import PersonalDataForm from '../../components/PersonalDataForm';
import Table from '../../components/Table';
import PropTypes from 'prop-types';
import './style.scss';

class BirthdaysCollection extends Component {
  componentDidMount() {
    this.props.getCountriesRequesting();
    this.props.loadPersonsRequesting();
  }

  handleSavePersonsLocalStorage() {
    this.props.savePersonsRequesting(this.props.persons);
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
              handleSavePersonsLocalStorage={this.handleSavePersonsLocalStorage.bind(
                this
              )}
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
    },
    savePersonsRequesting: value => {
      dispatch(savePersonsRequesting(value));
    },
    loadPersonsRequesting: () => {
      dispatch(loadPersonsRequesting());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdaysCollection);

BirthdaysCollection.propTypes = {
  countries: PropTypes.array.isRequired,
  notificationState: PropTypes.bool.isRequired,
  currentPerson: PropTypes.object.isRequired,
  persons: PropTypes.array.isRequired,
  getCountriesRequesting: PropTypes.func.isRequired,
  getDerivateDataRequesting: PropTypes.func.isRequired,
  disableNotification: PropTypes.func.isRequired,
  addAPerson: PropTypes.func.isRequired,
  savePersonsRequesting: PropTypes.func.isRequired,
  loadPersonsRequesting: PropTypes.func.isRequired
};
