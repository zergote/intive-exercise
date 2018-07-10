/* eslint-disable */
import React from 'react';
import { withFormik } from 'formik';
import Select from '../Select';
import TextInput from '../TextInput';
import Button from '../Button';
import * as Yup from 'yup';
import moment from 'moment';
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
    addAPerson
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
      <Button type="submit" disabled={isSubmitting} name="Save" />
    </form>
  );
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
    values.addAPerson(values);
    values.getDerivateDataRequesting(values);
    if (validateDate(values.birthday)) {
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
