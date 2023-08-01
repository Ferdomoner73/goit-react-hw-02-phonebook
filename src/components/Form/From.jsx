// import { Component } from 'react';
import { nanoid } from 'nanoid';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

export const ContactsForm = ({ handleSubmit }) => {
  const nameUniqueId = nanoid(20);
  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={nameUniqueId}>Name</label>
          <Field
            id={nameUniqueId}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
