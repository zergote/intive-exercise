import React from 'react';
import { withFormik } from 'formik';
import Select from '../Select';
import TextInput from '../TextInput';
import Button from '../Button';
import * as Yup from 'yup';
import moment from 'moment';
import PropTypes from 'prop-types';
import './style.scss';

let validateDate = date => {
  return moment(date, 'MM/DD/YYYY', true).isValid();
};

const Form = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    options,
    getDerivateDataRequesting,
    addAPerson,
    persons,
    savePersonsRequesting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        type="text"
        label="Name: "
        placeholder="name"
        error={touched.name && errors.name}
        value={values.name || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="surname"
        type="text"
        label="Surname: "
        placeholder="surname"
        error={touched.surname && errors.surname}
        value={values.surname || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Select
        id="country"
        options={options}
        label="Country: "
        error={touched.country && errors.country}
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="birthday"
        type="text"
        label="Birthday: "
        placeholder="mm/dd/yyyy"
        error={touched.birthday && errors.birthday}
        value={values.birthday || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        name="Save"
        persons={persons}
        savePersonsRequesting={savePersonsRequesting}
      />
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  options: PropTypes.array.isRequired,
  getDerivateDataRequesting: PropTypes.func,
  addAPerson: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
  savePersonsRequesting: PropTypes.func.isRequired
};

export const PersonalDataForm = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    surname: Yup.string().required('Surname is required!'),
    country: Yup.string().required('Country is required!'),
    birthday: Yup.string().required('Birthday is required!')
  }),
  mapPropsToValues: values => ({
    ...values
  }),

  handleSubmit: (values, { setSubmitting }) => {
    if (validateDate(values.birthday)) {
      values.addAPerson(values);
      values.getDerivateDataRequesting(values);
      const payload = { ...values };
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    } else {
      alert('Incorrect date. Follow this format mm/dd/yyyy');
      setTimeout(() => {
        setSubmitting(false);
      }, 500);
    }
  },
  displayName: 'Form'
})(Form);
