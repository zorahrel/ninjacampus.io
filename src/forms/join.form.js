import React, { useState, useEffect } from 'react';
import FormWizard from '../components/form-wizard/form-wizard.component';
import { FormSoul, FormWrapper } from '../components/form-wizard/form-wizard.style';

const data = {
  sendTo: 'attilio' + '@' + 'ninjacampus.io',
  questions: [
    {
      'title': 'Come ti chiami?',
      'name' : 'name',
      'type' : 'input',
      'placeholder': 'Marco Giuseppini'
    },
    {
      'title' : 'Come ti descriveresti?',
      'name' : 'bio',
      'type': 'textarea',
      'placeholder' : 'Marco Giuseppini'
    }
  ]
};


function JoinForm(props) {
  return <FormWrapper show={props.show}>
    {props.show && <FormWizard {...data} {...props} />}
  </FormWrapper>;
}

export default JoinForm;