/* eslint-disable */
import React from 'react';
import { withFormik } from 'formik';
import Select from '../Select';
import TextInput from '../TextInput';
import Button from '../Button';
import * as Yup from 'yup';
import './style.scss';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        type="text"
        label="Name: "
        placeholder="name"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="surname"
        type="text"
        label="Surname: "
        placeholder="surname"
        error={touched.surname && errors.surname}
        value={values.surname}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Select
        id="country"
        type="text"
        label="Country: "
        placeholder="Selected your coutry"
        error={touched.country && errors.country}
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="birthday"
        type="text"
        label="Birthday: "
        placeholder="Enter your birthday"
        error={touched.birthday && errors.birthday}
        value={values.birthday}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit" disabled={false} name="Save" />
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
  mapPropsToValues: user => ({
    ...user
  }),

  handleSubmit: (values, { setSubmitting }) => {
    const payload = { ...values };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm'
})(MyForm);
